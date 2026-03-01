# -*- coding: utf-8 -*-
"""
Parse 小学语文总复习资料 (extracted text) into structured REVIEW_DATA for the review module.
Reads _docx2_full.txt and outputs review_data.js
"""
import re, json, sys

def read_lines(path):
    with open(path, 'r', encoding='utf-8') as f:
        # File has line-number prefix from Read tool: "   123→content"
        raw = f.readlines()
    lines = []
    for r in raw:
        r = r.rstrip('\n\r')
        # Strip line number prefix if present (e.g. "     1→")
        m = re.match(r'^\s*\d+→(.*)$', r)
        if m:
            lines.append(m.group(1))
        else:
            lines.append(r)
    return lines

# ──────────────────────────────────────
# Grade/Semester detection
# ──────────────────────────────────────
GRADE_MAP = {'一':1,'二':2,'三':3,'四':4,'五':5,'六':6}
def parse_grade_semester(line):
    """Returns (grade, semester) or None"""
    m = re.match(r'^([一二三四五六])年级(上|下)册$', line.strip())
    if m:
        g = GRADE_MAP[m.group(1)]
        s = 1 if m.group(2) == '上' else 2
        return (g, s)
    return None

# ──────────────────────────────────────
# 1. Parse Poems (古诗)
# ──────────────────────────────────────
def parse_poems(lines, start, end):
    """Parse poems section. Each poem: title dynasty·poet, then lines."""
    poems = []
    grade, sem = 0, 0
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        gs = parse_grade_semester(line)
        if gs:
            grade, sem = gs
            i += 1
            continue
        # Try multiple title patterns:
        title, dynasty, poet = None, '', ''

        # Pattern 1: "七步诗 三国·魏 曹植" (title dynasty·sub poet)
        m = re.match(r'^(.+?)\s+(\S+?·\S+?)\s+(\S+)$', line)
        if m:
            title = m.group(1)
            dynasty = m.group(2)
            poet = m.group(3)
        # Pattern 2: "画 唐·王维" or "清平乐·村居 宋·辛弃疾" (title dynasty·poet)
        if not title:
            m = re.match(r'^(.+?)\s+(\S+?)·(\S+)$', line)
            if m:
                title = m.group(1)
                dynasty = m.group(2)
                poet = m.group(3)
        # Pattern 3: "卜算子·咏梅 毛泽东" (title poet, no dynasty)
        if not title:
            m = re.match(r'^(.+?)\s+(\S{2,4})$', line)
            if m and grade > 0:
                candidate_title = m.group(1)
                candidate_poet = m.group(2)
                # Verify it's a title (not poem content with punctuation)
                if '，' not in candidate_title and '。' not in candidate_title:
                    title = candidate_title
                    poet = candidate_poet
        # Pattern 4: "诗经·采薇（节选）" (title only, no poet on same line)
        if not title:
            m = re.match(r'^(.+?)（.+?）$', line)
            if m and '，' not in line and '。' not in line and grade > 0:
                title = line
                dynasty = ''
                poet = ''

        if title and grade > 0:
            # Collect poem lines until next title or grade header
            poem_lines = []
            i += 1
            while i < end:
                pl = lines[i].strip()
                if not pl:
                    i += 1
                    continue
                if parse_grade_semester(pl):
                    break
                # Poem content has Chinese punctuation
                if '，' in pl or '。' in pl or '？' in pl or '！' in pl:
                    poem_lines.append(pl)
                    i += 1
                    continue
                # If no punctuation, it's likely a new title - break
                break
            poems.append({
                'title': title,
                'dynasty': dynasty,
                'poet': poet,
                'grade': grade,
                'semester': sem,
                'lines': poem_lines
            })
        else:
            i += 1
    return poems

# ──────────────────────────────────────
# 2. Parse Thematic Poetry Lines (描写景色/友谊的诗句)
# ──────────────────────────────────────
def parse_thematic_lines(lines, start, end):
    """Parse themed poetry excerpts like 描写景色的诗句"""
    themes = {}
    current_theme = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Theme header: "描写景色的诗句" or "诗中山"
        if re.match(r'^(描写|诗中).+', line) and '，' not in line:
            current_theme = line
            themes[current_theme] = []
            i += 1
            continue
        if current_theme and ('（' in line or '——' in line or '，' in line):
            themes[current_theme].append(line)
        i += 1
    # Remove empty themes (section headers with no content)
    themes = {k: v for k, v in themes.items() if v}
    return themes

# ──────────────────────────────────────
# 3. Parse 日积月累 (Accumulated knowledge by grade)
# ──────────────────────────────────────
def parse_accumulated(lines, start, end):
    """Parse 日积月累 section - quotes, proverbs by grade"""
    result = {}
    grade, sem = 0, 0
    category = ''
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        gs = parse_grade_semester(line)
        if gs:
            grade, sem = gs
            category = ''
            i += 1
            continue
        # Category headers (no punctuation, short, not a poem title)
        is_header = (len(line) < 20 and '，' not in line and '。' not in line
                     and '（' not in line and '—' not in line and '——' not in line)
        # Exclude lines that look like poem titles (contain dynasty·poet patterns)
        if is_header and ('·' in line and re.search(r'[唐宋元明清]', line)):
            # This is likely a poem title embedded in accumulated section (e.g. "马诗 唐·李贺")
            # Treat it as a special category
            category = line
            key = f'{grade}-{sem}'
            if key not in result:
                result[key] = {}
            if category not in result[key]:
                result[key][category] = []
            i += 1
            continue
        if is_header:
            category = line
            key = f'{grade}-{sem}'
            if key not in result:
                result[key] = {}
            if category not in result[key]:
                result[key][category] = []
            i += 1
            continue
        # Content line
        if grade > 0 and category:
            key = f'{grade}-{sem}'
            if key in result and category in result[key]:
                result[key][category].append(line)
        i += 1
    return result

# ──────────────────────────────────────
# 4. Parse Word Patterns (AABB, ABAC, etc.)
# ──────────────────────────────────────
def parse_word_patterns(lines, start, end):
    """Parse word pattern categories"""
    # Known category headers
    KNOWN_HEADERS = {'数字词语','AABB式','ABAC式','AABC式','ABCC式','ABCB式',
                     '含有反义词','意思相近','人体成语','动物成语'}
    patterns = {}
    current = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Only treat as header if it matches a known header
        if line in KNOWN_HEADERS:
            current = line.replace('式', '')
            patterns[current] = []
            i += 1
            continue
        if current:
            # Split by full-width space or tab
            words = re.split(r'[　\t]+', line)
            words = [w.strip() for w in words if w.strip()]
            patterns[current].extend(words)
        i += 1
    return patterns

# ──────────────────────────────────────
# 5. Parse Categorized Vocabulary (词语分类积累)
# ──────────────────────────────────────
def parse_categorized_vocab(lines, start, end):
    """Parse numbered vocabulary categories (1. 高兴, 2. 生气, etc.)"""
    # Known sub-categories (seasons under 描写季节)
    KNOWN_SUBS = {'春天','夏天','秋天','冬天'}
    categories = {}
    current = None
    current_sub = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Numbered category: "1. 高兴" or "15. 描写季节"
        m = re.match(r'^(\d+)\.\s*(.+)$', line)
        if m:
            current = m.group(2).strip()
            categories[current] = []
            current_sub = None
            i += 1
            continue
        # Sub-category only for known season names
        if current and line in KNOWN_SUBS:
            current_sub = line
            categories[current + '-' + current_sub] = []
            i += 1
            continue
        if current:
            words = re.split(r'[　\t]+', line)
            words = [w.strip() for w in words if w.strip()]
            target = current + '-' + current_sub if current_sub else current
            if target not in categories:
                categories[target] = []
            categories[target].extend(words)
        i += 1
    return categories

# ──────────────────────────────────────
# 6. Parse 歇后语 (Allegorical sayings)
# ──────────────────────────────────────
def parse_xiehouyu(lines, start, end):
    """Parse 歇后语 - format: front——back"""
    sayings = []
    for i in range(start, end):
        line = lines[i].strip()
        if not line:
            continue
        if '——' in line:
            parts = line.split('——', 1)
            front = parts[0].strip()
            back = parts[1].strip()
            # Check if it's a homophonic pun
            pun_match = re.search(r'（(.+?)）', back)
            pun = pun_match.group(1) if pun_match else ''
            sayings.append({
                'front': front,
                'back': back,
                'pun': pun
            })
    return sayings

# ──────────────────────────────────────
# 7. Parse 谚语 (Proverbs)
# ──────────────────────────────────────
def parse_proverbs(lines, start, end):
    """Parse proverbs by theme"""
    proverbs = {}
    current_theme = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Theme header: "关于天气" etc.
        m = re.match(r'^关于(.+)$', line)
        if m:
            current_theme = m.group(1)
            proverbs[current_theme] = []
            i += 1
            continue
        if current_theme and ('，' in line or '。' in line):
            proverbs[current_theme].append(line)
        i += 1
    return proverbs

# ──────────────────────────────────────
# 8. Parse 对联 (Couplets)
# ──────────────────────────────────────
def parse_couplets(lines, start, end):
    """Parse couplets and 对子歌"""
    couplets = []
    duizi = []
    current_type = ''
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        if line == '对联':
            current_type = 'couplet'
            i += 1
            continue
        if line == '对子歌':
            current_type = 'duizi'
            i += 1
            continue
        if current_type == 'couplet':
            # Extract location if present
            loc_match = re.search(r'（(.+?)）', line)
            loc = loc_match.group(1) if loc_match else ''
            text = re.sub(r'（.+?）', '', line).strip()
            couplets.append({'text': text, 'location': loc})
        elif current_type == 'duizi':
            duizi.append(line)
        else:
            # Before either section, might be content too
            if '；' in line or '，' in line:
                couplets.append({'text': line, 'location': ''})
        i += 1
    return {'couplets': couplets, 'duizi': duizi}

# ──────────────────────────────────────
# 9. Parse 句子仿写 (Sentence patterns)
# ──────────────────────────────────────
def parse_sentence_patterns(lines, start, end):
    """Parse 20 sentence writing examples"""
    patterns = []
    current_id = 0
    current_lines = []
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Pattern number: "1. 幸福是..."
        m = re.match(r'^(\d+)\.\s*(.+)$', line)
        if m:
            if current_id > 0 and current_lines:
                patterns.append({'id': current_id, 'lines': current_lines})
            current_id = int(m.group(1))
            current_lines = [m.group(2)]
            i += 1
            continue
        if current_id > 0:
            current_lines.append(line)
        i += 1
    if current_id > 0 and current_lines:
        patterns.append({'id': current_id, 'lines': current_lines})
    return patterns

# ──────────────────────────────────────
# 10. Parse 多音字 (Multi-reading characters)
# ──────────────────────────────────────
def parse_multi_reading(lines, start, end):
    """Parse multi-reading characters organized by letter"""
    chars = []
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Skip letter headers like "A部"
        if re.match(r'^[A-Z]部$', line):
            i += 1
            continue
        # Character entry: "阿 ①ā 阿罗汉 阿姨  ②ē 阿附 阿胶"
        m = re.match(r'^(\S)\s+①(.+)$', line)
        if m:
            char = m.group(1)
            rest = m.group(2)
            readings = []
            # Split by ② ③ ④ ⑤ ⑥
            parts = re.split(r'\s*[②③④⑤⑥]\s*', '①' + rest)
            for p in parts:
                p = p.strip()
                if not p:
                    continue
                # Remove leading ① if present
                p = re.sub(r'^①\s*', '', p)
                if not p:
                    continue
                # First token is pinyin, rest are words
                tokens = re.split(r'\s+', p)
                if tokens:
                    pinyin = tokens[0]
                    # Clean pinyin - remove parenthetical notes
                    pinyin_clean = re.sub(r'[（(].+?[）)]', '', pinyin).strip()
                    words = []
                    note = ''
                    for t in tokens[1:]:
                        # Some have notes in parentheses
                        if t.startswith('(') or t.startswith('（'):
                            note = t.strip('()（）')
                        else:
                            words.append(t)
                    readings.append({
                        'pinyin': pinyin_clean,
                        'words': words,
                        'note': note
                    })
            if readings:
                chars.append({'char': char, 'readings': readings})
        i += 1
    return chars

# ──────────────────────────────────────
# 11. Parse 修辞手法 (Rhetoric methods)
# ──────────────────────────────────────
def parse_rhetoric(lines, start, end):
    """Parse rhetoric methods"""
    methods = []
    current = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Method header: "(1) 比喻"
        m = re.match(r'^\((\d+)\)\s*(.+)$', line)
        if m:
            if current:
                methods.append(current)
            current = {
                'id': int(m.group(1)),
                'name': m.group(2),
                'definition': '',
                'types': [],
                'examples': []
            }
            i += 1
            continue
        if current:
            # Sub-types like "明喻：甲像乙..."
            if '：' in line and len(line) < 50:
                parts = line.split('：', 1)
                if len(parts[0]) < 10:
                    current['types'].append(line)
                else:
                    if not current['definition']:
                        current['definition'] = line
                    else:
                        current['examples'].append(line)
            elif '例：' in line or '例:' in line:
                current['examples'].append(line)
            elif not current['definition']:
                # First content line is always the definition
                current['definition'] = line
            else:
                current['examples'].append(line)
        i += 1
    if current:
        methods.append(current)
    return methods

# ──────────────────────────────────────
# 12. Parse 说明方法 (Explanation methods)
# ──────────────────────────────────────
def parse_explanation_methods(lines, start, end):
    """Parse explanation methods"""
    methods = []
    i = start
    # First line lists all methods
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Method with description: "举例子：使表达更明确..."
        if '：' in line:
            parts = line.split('：', 1)
            methods.append({
                'name': parts[0].strip(),
                'description': parts[1].strip()
            })
        i += 1
    return methods

# ──────────────────────────────────────
# 13. Parse 阅读理解答题技巧 (Reading comprehension)
# ──────────────────────────────────────
def parse_reading_tips(lines, start, end):
    """Parse reading comprehension answer techniques"""
    tips = []
    current = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        # Section header: "一、表达方式" or "二十四、其他答题技巧"
        m = re.match(r'^([一二三四五六七八九十]+)、(.+)$', line)
        if m:
            if current:
                tips.append(current)
            current = {
                'title': m.group(2),
                'items': []
            }
            i += 1
            continue
        # Sub-item or content
        if current:
            if line.startswith('（见前）') or line == '（见前）':
                current['items'].append('（见前面修辞手法/说明方法部分）')
            else:
                current['items'].append(line)
        i += 1
    if current:
        tips.append(current)
    return tips

# ──────────────────────────────────────
# 14. Parse 近义词 / 反义词 (Synonyms / Antonyms)
# ──────────────────────────────────────
def parse_word_pairs(lines, start, end, separator='—'):
    """Parse synonym or antonym pairs"""
    pairs = []
    current_category = ''
    for i in range(start, end):
        line = lines[i].strip()
        if not line:
            continue
        # Letter or category header
        if re.match(r'^[A-Z]$', line):
            current_category = line
            continue
        if line in ('单字反义', '双字及多字反义', '成语近义词', '成语反义'):
            current_category = line
            continue
        # Parse pairs separated by — or spaces
        # Format: "爱慕—喜爱　安然—安稳　遨游—游览"
        segments = re.split(r'[　\t]+', line)
        for seg in segments:
            seg = seg.strip()
            if separator in seg:
                parts = seg.split(separator, 1)
                if len(parts) == 2 and parts[0].strip() and parts[1].strip():
                    pairs.append({
                        'a': parts[0].strip(),
                        'b': parts[1].strip(),
                        'category': current_category
                    })
    return pairs

# ──────────────────────────────────────
# 15. Parse 破折号 (Dash usage)
# ──────────────────────────────────────
def parse_dash_usage(lines, start, end):
    """Parse dash usage rules"""
    rules = []
    current = None
    i = start
    while i < end:
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        m = re.match(r'^(\d+)\.\s*(.+)$', line)
        if m:
            if current:
                rules.append(current)
            current = {'rule': m.group(2), 'examples': []}
            i += 1
            continue
        if line.startswith('注意：') or line.startswith('注意:'):
            if current:
                rules.append(current)
                current = None
            rules.append({'rule': '注意事项', 'examples': [line]})
            i += 1
            continue
        if current:
            current['examples'].append(line)
        i += 1
    if current:
        rules.append(current)
    return rules

# ──────────────────────────────────────
# 16. Parse 描写手法 & 文章结构
# ──────────────────────────────────────
def parse_writing_techniques(lines, start, end):
    """Parse writing techniques and article structure"""
    result = {'techniques': [], 'structures': []}
    for i in range(start, end):
        line = lines[i].strip()
        if not line:
            continue
        if '描写' in line and '：' not in line:
            result['techniques'] = re.split(r'\s+', line)
        elif '：' in line:
            parts = line.split('：', 1)
            result['structures'].append({
                'type': parts[0].strip(),
                'description': parts[1].strip()
            })
    return result

# ──────────────────────────────────────
# MAIN: Detect sections and dispatch
# ──────────────────────────────────────
def find_section_boundaries(lines):
    """Find the line indices for each major section"""
    sections = {}
    for i, line in enumerate(lines):
        l = line.strip()
        if l == '小学语文总复习资料':
            sections['title'] = i
        elif l == '一至六年级古诗集锦':
            sections['poems_start'] = i + 1
        elif l == '描写景色的诗句':
            sections['poems_end'] = i
            sections['thematic_poetry_start'] = i
        elif l == '描写友谊的诗句':
            pass  # part of thematic poetry
        elif l == '日积月累（一至六年级）':
            sections['thematic_poetry_end'] = i
            sections['accumulated_start'] = i + 1
        elif l == '词语盘点':
            sections['accumulated_end'] = i
            sections['word_patterns_start'] = i + 1
        elif l == '描写山水花鸟长江黄河月亮四季的诗句':
            sections['word_patterns_end'] = i
            sections['theme_poetry_start'] = i
        elif l == '词语分类积累':
            sections['theme_poetry_end'] = i
            sections['categorized_vocab_start'] = i + 1
        elif l == '歇后语' and i > 500:
            # There are multiple 歇后语 headers; use the one after vocab
            if 'categorized_vocab_end' not in sections:
                sections['categorized_vocab_end'] = i
                sections['xiehouyu_start'] = i + 1
        elif l == '谚语' and i > 700:
            if 'xiehouyu_end' not in sections:
                sections['xiehouyu_end'] = i
                sections['proverbs_start'] = i + 1
        elif l == '对联与对子歌':
            sections['proverbs_end'] = i
            sections['couplets_start'] = i + 1
        elif l == '名言与时间格言':
            sections['couplets_end'] = i
            sections['quotes_extra_start'] = i + 1
        elif l == '精美句子仿写20例':
            sections['quotes_extra_end'] = i
            sections['sentence_patterns_start'] = i + 1
        elif l == '常用多音字大全':
            sections['sentence_patterns_end'] = i
            sections['multi_reading_start'] = i + 1
        elif l == '修辞手法':
            sections['multi_reading_end'] = i
            sections['rhetoric_start'] = i + 1
        elif l == '常见说明方法':
            sections['rhetoric_end'] = i
            sections['explanation_start'] = i + 1
        elif l == '破折号的作用及举例':
            sections['explanation_end'] = i
            sections['dash_start'] = i + 1
        elif l == '描写手法':
            sections['dash_end'] = i
            sections['writing_techniques_start'] = i
        elif l == '阅读理解答题技巧':
            sections['writing_techniques_end'] = i
            sections['reading_tips_start'] = i + 1
        elif l == '近义词大全':
            sections['reading_tips_end'] = i
            sections['synonyms_start'] = i + 1
        elif l == '反义词大全':
            sections['synonyms_end'] = i
            sections['antonyms_start'] = i + 1
    sections['antonyms_end'] = len(lines)
    return sections

def main():
    lines = read_lines('E:/chinese/_docx2_full.txt')
    print(f'Read {len(lines)} lines')

    # Find section boundaries
    sec = find_section_boundaries(lines)
    print(f'Found sections: {list(sec.keys())}')

    # Parse each section
    data = {}

    # 1. Poems
    if 'poems_start' in sec and 'poems_end' in sec:
        data['poems'] = parse_poems(lines, sec['poems_start'], sec['poems_end'])
        print(f'  Poems: {len(data["poems"])}')

    # 2. Thematic poetry lines (景色/友谊)
    if 'thematic_poetry_start' in sec and 'thematic_poetry_end' in sec:
        tp = parse_thematic_lines(lines, sec['thematic_poetry_start'], sec['thematic_poetry_end'])
        data['thematicLines'] = {k: v for k, v in tp.items()}
        print(f'  Thematic poetry themes: {len(data["thematicLines"])}')

    # 3. 日积月累
    if 'accumulated_start' in sec and 'accumulated_end' in sec:
        data['accumulated'] = parse_accumulated(lines, sec['accumulated_start'], sec['accumulated_end'])
        print(f'  Accumulated knowledge grades: {len(data["accumulated"])}')

    # 4. Word patterns (AABB etc.)
    if 'word_patterns_start' in sec and 'word_patterns_end' in sec:
        data['wordPatterns'] = parse_word_patterns(lines, sec['word_patterns_start'], sec['word_patterns_end'])
        print(f'  Word pattern types: {len(data["wordPatterns"])}')

    # 5. Theme poetry (山水花鸟...)
    if 'theme_poetry_start' in sec and 'theme_poetry_end' in sec:
        tp = parse_thematic_lines(lines, sec['theme_poetry_start'], sec['theme_poetry_end'])
        data['themePoetry'] = tp
        print(f'  Theme poetry categories: {len(data["themePoetry"])}')

    # 6. Categorized vocabulary (53 categories)
    if 'categorized_vocab_start' in sec and 'categorized_vocab_end' in sec:
        data['categorizedVocab'] = parse_categorized_vocab(lines, sec['categorized_vocab_start'], sec['categorized_vocab_end'])
        print(f'  Categorized vocab groups: {len(data["categorizedVocab"])}')

    # 7. 歇后语
    xhy_all = []
    if 'xiehouyu_start' in sec and 'xiehouyu_end' in sec:
        xhy_all = parse_xiehouyu(lines, sec['xiehouyu_start'], sec['xiehouyu_end'])
    # Also collect 歇后语 from accumulated section (三年级下 etc.)
    # And the ones at lines 696-728
    # Scan entire file for stray 歇后语
    for i, line in enumerate(lines):
        l = line.strip()
        if '——' in l and i not in range(sec.get('xiehouyu_start', 0), sec.get('xiehouyu_end', 0)):
            parts = l.split('——', 1)
            if len(parts[0]) < 20 and len(parts[1]) < 30:
                pun_match = re.search(r'（(.+?)）', parts[1])
                entry = {
                    'front': parts[0].strip(),
                    'back': parts[1].strip(),
                    'pun': pun_match.group(1) if pun_match else ''
                }
                # Avoid duplicates
                if not any(x['front'] == entry['front'] for x in xhy_all):
                    xhy_all.append(entry)
    data['xiehouyu'] = xhy_all
    print(f'  歇后语: {len(data["xiehouyu"])}')

    # 8. 谚语
    if 'proverbs_start' in sec and 'proverbs_end' in sec:
        data['proverbs'] = parse_proverbs(lines, sec['proverbs_start'], sec['proverbs_end'])
        print(f'  Proverb themes: {len(data["proverbs"])}')

    # 9. 对联
    if 'couplets_start' in sec and 'couplets_end' in sec:
        data['couplets'] = parse_couplets(lines, sec['couplets_start'], sec['couplets_end'])
        print(f'  Couplets: {len(data["couplets"]["couplets"])}, 对子歌 lines: {len(data["couplets"]["duizi"])}')

    # 10. 句子仿写
    if 'sentence_patterns_start' in sec and 'sentence_patterns_end' in sec:
        data['sentencePatterns'] = parse_sentence_patterns(lines, sec['sentence_patterns_start'], sec['sentence_patterns_end'])
        print(f'  Sentence patterns: {len(data["sentencePatterns"])}')

    # 11. 多音字
    if 'multi_reading_start' in sec and 'multi_reading_end' in sec:
        data['multiReading'] = parse_multi_reading(lines, sec['multi_reading_start'], sec['multi_reading_end'])
        print(f'  Multi-reading chars: {len(data["multiReading"])}')

    # 12. 修辞手法
    if 'rhetoric_start' in sec and 'rhetoric_end' in sec:
        data['rhetoric'] = parse_rhetoric(lines, sec['rhetoric_start'], sec['rhetoric_end'])
        print(f'  Rhetoric methods: {len(data["rhetoric"])}')

    # 13. 说明方法
    if 'explanation_start' in sec and 'explanation_end' in sec:
        data['explanationMethods'] = parse_explanation_methods(lines, sec['explanation_start'], sec['explanation_end'])
        print(f'  Explanation methods: {len(data["explanationMethods"])}')

    # 14. 破折号
    if 'dash_start' in sec and 'dash_end' in sec:
        data['dashUsage'] = parse_dash_usage(lines, sec['dash_start'], sec['dash_end'])
        print(f'  Dash usage rules: {len(data["dashUsage"])}')

    # 15. 描写手法 & 文章结构
    if 'writing_techniques_start' in sec and 'writing_techniques_end' in sec:
        data['writingTechniques'] = parse_writing_techniques(lines, sec['writing_techniques_start'], sec['writing_techniques_end'])
        print(f'  Writing techniques: {len(data["writingTechniques"]["techniques"])} + {len(data["writingTechniques"]["structures"])} structures')

    # 16. 阅读理解
    if 'reading_tips_start' in sec and 'reading_tips_end' in sec:
        data['readingTips'] = parse_reading_tips(lines, sec['reading_tips_start'], sec['reading_tips_end'])
        print(f'  Reading tips sections: {len(data["readingTips"])}')

    # 17. 近义词
    if 'synonyms_start' in sec and 'synonyms_end' in sec:
        data['synonyms'] = parse_word_pairs(lines, sec['synonyms_start'], sec['synonyms_end'], '—')
        print(f'  Synonym pairs: {len(data["synonyms"])}')

    # 18. 反义词
    if 'antonyms_start' in sec and 'antonyms_end' in sec:
        data['antonyms'] = parse_word_pairs(lines, sec['antonyms_start'], sec['antonyms_end'], '—')
        print(f'  Antonym pairs: {len(data["antonyms"])}')

    # Extra quotes from 名言与时间格言
    if 'quotes_extra_start' in sec and 'quotes_extra_end' in sec:
        extra = []
        cat = ''
        for i in range(sec['quotes_extra_start'], sec['quotes_extra_end']):
            line = lines[i].strip()
            if not line:
                continue
            if len(line) < 15 and '，' not in line and '。' not in line:
                cat = line
                continue
            extra.append({'text': line, 'category': cat})
        data['extraQuotes'] = extra
        print(f'  Extra quotes: {len(data["extraQuotes"])}')

    # ──────────────────────────────────────
    # Post-processing: clean up empty categories
    # ──────────────────────────────────────
    if 'categorizedVocab' in data:
        data['categorizedVocab'] = {k: v for k, v in data['categorizedVocab'].items() if v}
        print(f'  After cleanup: {len(data["categorizedVocab"])} vocab groups')

    # ──────────────────────────────────────
    # Output as JavaScript
    # ──────────────────────────────────────
    js_content = '// Auto-generated from 小学语文总复习资料.docx\n'
    js_content += '// Generated by parse_review.py\n'
    js_content += f'// Total lines parsed: {len(lines)}\n\n'
    js_content += 'const REVIEW_DATA = '
    js_content += json.dumps(data, ensure_ascii=False, indent=2)
    js_content += ';\n'

    out_path = 'E:/chinese/review_data.js'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f'\nOutput written to {out_path}')
    print(f'File size: {len(js_content):,} bytes')

if __name__ == '__main__':
    main()
