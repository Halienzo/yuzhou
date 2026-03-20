# YuZhou (语宙) — Project Instructions

## Quick Start
- Single-file HTML app: `Chinese chars.html` (~21,100+ lines), G1-G9 Chinese learning
- External data files: 18 textbook JS, 18 analysis JS, 18 CT JS, 18 WT JS, plus review/HSK/exam data
- PWA: `sw.js` (cache version in `CACHE_NAME`), `manifest.json`
- Version badge in HTML around line 6210 (`v37`), SW cache must match

## Build & Verify
```bash
# Verify all textbook files parse correctly
node build/_final_audit.js

# End-to-end English toggle verification (all 476 lessons)
node build/_e2e_verify.js

# Check text/textEn paragraph alignment
node build/_check_alignment.js

# Audit G1-G6 textbooks
node build/_audit_g1g6.js
```

## Critical Rules

<important if="editing textbook JS files">
- Textbook files use UNQUOTED keys: `title: "春"` not `"title": "春"`
- Title encoding varies: some files use `\uXXXX` escapes, others plain Chinese — always search BOTH
- `text[]` and `textEn[]` arrays MUST have same length for English toggle to work
- After any textbook edit, run `node build/_final_audit.js` to verify
- Never inject exercise/guidance content (提示, 写作指导, 口语交际) as lesson text
</important>

<important if="modifying the HTML file">
- The HTML file is ~21,100+ lines — always use Read with offset/limit, never read the whole file
- G1-G6 renderer: `tbShowLesson()` around line 17865
- G7-G9 renderer: `tbShowLessonJH()` around line 18859
- English toggle: `tbToggleEn()` around line 18104, toggles `.tbEnLine` elements
- Version bump: update both HTML version badge AND `sw.js` CACHE_NAME
</important>

<important if="committing or pushing">
- Always run audit scripts before committing textbook changes
- Commit message style: imperative, describe what changed and why
- Never force-push to main
</important>

## Data File Patterns
| Pattern | Variable | Example |
|---------|----------|---------|
| `textbook_g{N}s{M}.js` | `TB_G{N}S{M}` | `textbook_g7s1.js` → `TB_G7S1` |
| `analysis_g{N}s{M}.js` | `AN_G{N}S{M}` | Lazy-loaded via `loadAnalysisData()` |
| `ct_g{N}s{M}.js` | `SB_G{N}S{M}` | Critical thinking data |
| `wt_g{N}s{M}.js` | `WT_G{N}S{M}` | Writing technique annotations |

## Architecture Summary
- State object `S` — grade, semester, current char, SRS
- `VIEWS` router with `navigateTo(v)` — 18 modules
- UI: Icon Rail (48px) + Side Panel (220px), VS Code style
- HanziWriter v3.5 for strokes, Web Speech API for TTS
- See auto-memory for detailed module/function reference
