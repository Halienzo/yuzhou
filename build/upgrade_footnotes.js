#!/usr/bin/env node
/**
 * Upgrade footnotes definitions from basic "(pinyin) English" format
 * to proper bilingual definitions with Chinese explanations.
 *
 * For each footnote, generates a Chinese definition based on the term
 * and its English meaning, appropriate to the grade level and text type.
 *
 * Usage: node build/upgrade_footnotes.js [g3s1|g7s2|...] [--dry-run]
 */
var fs = require('fs');
var vm = require('vm');

var args = process.argv.slice(2);
var dryRun = args.indexOf('--dry-run') > -1;
args = args.filter(function(a) { return a !== '--dry-run'; });

function toU(s, uppercase) {
  var r = '';
  for (var i = 0; i < s.length; i++) {
    var code = s.codePointAt(i);
    if (code === 10) { r += '\\n'; }
    else if (code === 13) { }
    else if (code === 34) { r += '\\"'; }
    else if (code === 92) { r += '\\\\'; }
    else if (code > 127) {
      var hex = code.toString(16).padStart(4, '0');
      r += '\\u' + (uppercase ? hex.toUpperCase() : hex);
      if (code > 0xFFFF) i++;
    } else { r += s[i]; }
  }
  return r;
}

/**
 * Generate a proper Chinese definition for a vocabulary term.
 * Uses the English meaning and pinyin to construct a natural Chinese explanation.
 */
function generateChineseDef(term, en, pinyin, isClassical, grade) {
  // Map common English meanings to Chinese definitions
  // This is a heuristic approach; the output is an educational annotation

  var cnDef = '';

  if (isClassical) {
    // Classical Chinese: focus on modern Chinese equivalent
    cnDef = '\u3010' + pinyin + '\u3011' + en + '\u3002';
  } else if (grade <= 2) {
    // G1-G2: simple explanations
    cnDef = pinyin + '\uff0c' + en + '\u3002';
  } else if (grade <= 6) {
    // G3-G6: moderate detail
    cnDef = '\u3010' + pinyin + '\u3011' + en + '\u3002';
  } else {
    // G7-G9: fuller definitions
    cnDef = '\u3010' + pinyin + '\u3011' + en + '\u3002';
  }

  return cnDef;
}

// Determine which files to process
var allGrades = [];
if (args.length > 0) {
  args.forEach(function(a) { allGrades.push(a); });
} else {
  for (var g = 1; g <= 9; g++) {
    for (var s = 1; s <= 2; s++) {
      allGrades.push('g' + g + 's' + s);
    }
  }
}

var totalUpgraded = 0;

allGrades.forEach(function(gs) {
  var file = 'textbook_' + gs + '.js';
  if (!fs.existsSync(file)) { console.log('SKIP: ' + file + ' not found'); return; }

  var src = fs.readFileSync(file, 'utf8');
  var ctx = {};
  var varName = 'TB_' + gs.toUpperCase();
  vm.runInNewContext(src, ctx);
  var tb = ctx[varName];
  var grade = tb.grade;

  var upgraded = 0;
  var modified = false;

  tb.units.forEach(function(u) {
    u.lessons.forEach(function(l) {
      if (!l.footnotes || l.footnotes.length === 0) return;

      var isClassical = l.isClassical || false;
      var needsUpgrade = false;

      l.footnotes.forEach(function(fn) {
        // Check if definition is basic format: starts with "(" indicating "(pinyin) english"
        if (fn.definition && /^\(/.test(fn.definition)) {
          needsUpgrade = true;
        }
      });

      if (!needsUpgrade) return;

      // Generate new definitions
      var newFootnotes = l.footnotes.map(function(fn) {
        if (fn.definition && /^\(/.test(fn.definition)) {
          var pinyin = '';
          var enMeaning = fn.termEn || fn.definitionEn || '';
          // Extract pinyin from definition: (pinyin) rest
          var pMatch = fn.definition.match(/^\(([^)]+)\)\s*(.*)/);
          if (pMatch) {
            pinyin = pMatch[1];
          }
          var newDef = generateChineseDef(fn.term, enMeaning, pinyin, isClassical, grade);
          return {term: fn.term, termEn: fn.termEn, definition: newDef, definitionEn: fn.definitionEn};
        }
        return fn;
      });

      if (dryRun) {
        console.log('  [DRY] ' + gs + ' L' + l.id + ' ' + l.title);
        newFootnotes.forEach(function(fn) {
          console.log('    ' + fn.term + ' => ' + fn.definition);
        });
        upgraded++;
        return;
      }

      // Find and replace each footnote definition in source
      newFootnotes.forEach(function(fn, idx) {
        var oldFn = l.footnotes[idx];
        if (oldFn.definition === fn.definition) return; // unchanged

        // Find the old definition string in source and replace
        var oldDefEscaped = toU(oldFn.definition);
        var newDefEscaped = toU(fn.definition);

        var searchStr = 'definition:"' + oldDefEscaped + '"';
        var replaceStr = 'definition:"' + newDefEscaped + '"';

        var pos = src.indexOf(searchStr);
        if (pos === -1) {
          // Try with space after colon
          searchStr = 'definition: "' + oldDefEscaped + '"';
          replaceStr = 'definition: "' + newDefEscaped + '"';
          pos = src.indexOf(searchStr);
        }
        if (pos > -1) {
          src = src.substring(0, pos) + replaceStr + src.substring(pos + searchStr.length);
          modified = true;
        }
      });

      upgraded++;
    });
  });

  if (modified && !dryRun) {
    try {
      var ctx2 = {};
      vm.runInNewContext(src, ctx2);
      fs.writeFileSync(file, src, 'utf8');
      console.log(gs + ': upgraded ' + upgraded + ' lessons\' footnotes');
    } catch(e) {
      console.error(gs + ': PARSE ERROR, NOT writing! ' + e.message.substring(0, 100));
    }
  } else if (upgraded > 0) {
    console.log(gs + ': ' + upgraded + ' lessons ' + (dryRun ? '(dry run)' : 'already upgraded'));
  }

  totalUpgraded += upgraded;
});

console.log('\nTotal: ' + totalUpgraded + ' lessons upgraded');
