#!/usr/bin/env python3
"""
extract_zk_papers.py — Extract Zhongkao exam papers from .doc/.docx files
Outputs structured text for manual review before converting to JSON.

Usage:
  python build/extract_zk_papers.py [year]       # Extract specific year
  python build/extract_zk_papers.py --all         # Extract all available
  python build/extract_zk_papers.py --list        # List available files
"""

import os
import sys
import re
import json
import glob

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'tests', 'G7-G9')
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tmp_docs')

def list_files():
    """List all available exam paper files."""
    files = []
    for f in sorted(os.listdir(BASE_DIR)):
        if f.endswith(('.doc', '.docx')) and not f.startswith('~'):
            year_match = re.search(r'(\d{4})', f)
            year = int(year_match.group(1)) if year_match else 0
            files.append({'name': f, 'year': year, 'ext': f.split('.')[-1]})
    return files

_word_app = None
def _get_word_app():
    """Get or create a shared Word Application instance."""
    global _word_app
    if _word_app is None:
        import win32com.client
        _word_app = win32com.client.Dispatch('Word.Application')
        _word_app.Visible = False
    return _word_app

def _quit_word_app():
    """Quit the shared Word Application."""
    global _word_app
    if _word_app is not None:
        try:
            _word_app.Quit()
        except:
            pass
        _word_app = None

def extract_doc(filepath):
    """Extract text from .doc file using win32com."""
    word = _get_word_app()
    try:
        abspath = os.path.abspath(filepath)
        doc = word.Documents.Open(abspath)
        # Extract text from all paragraphs for better structure
        paragraphs = []
        for i in range(1, doc.Paragraphs.Count + 1):
            para_text = doc.Paragraphs(i).Range.Text.strip()
            if para_text:
                paragraphs.append(para_text)
        text = '\n'.join(paragraphs) if paragraphs else doc.Content.Text
        doc.Close(False)
        return text
    except Exception as e:
        print(f"Error extracting {filepath}: {e}")
        return ""

def extract_docx(filepath):
    """Extract text from .docx file using python-docx."""
    import docx
    doc = docx.Document(filepath)
    paragraphs = []
    for para in doc.paragraphs:
        if para.text.strip():
            paragraphs.append(para.text)
    return '\n'.join(paragraphs)

def extract_file(filepath):
    """Extract text from a file based on extension."""
    ext = filepath.split('.')[-1].lower()
    if ext == 'doc':
        return extract_doc(filepath)
    elif ext == 'docx':
        return extract_docx(filepath)
    else:
        raise ValueError(f"Unsupported file type: {ext}")

def parse_exam_text(text, year):
    """Parse raw exam text into structured sections and questions."""
    lines = text.split('\n')
    sections = []
    current_section = None
    current_question = None
    question_num = 0
    in_answer_section = False

    # Chinese section number patterns
    section_re = re.compile(r'^[\s]*[一二三四五六七八九十]+[、\.．]\s*(.+)')
    question_re = re.compile(r'^[\s]*(\d+)[\.、．\s]+(.+)')
    option_re = re.compile(r'^[\s]*([A-Da-d])[\.、．\s]+(.+)')
    answer_re = re.compile(r'^[\s]*(?:答案|参考答案)[：:\s]+(.+)', re.IGNORECASE)

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Check for answer section marker
        if re.match(r'^[\s]*(?:参考答案|答案|参考答案及评分标准)', line):
            in_answer_section = True
            continue

        # Try to match section header
        sm = section_re.match(line)
        if sm and not in_answer_section:
            sec_name = sm.group(1).strip()
            # Extract score if present
            score_match = re.search(r'[（\(](\d+)\s*分[）\)]', sec_name)
            score = int(score_match.group(1)) if score_match else 0
            current_section = {
                'name': sec_name,
                'score': score,
                'questions': []
            }
            sections.append(current_section)
            current_question = None
            continue

        # Try to match question
        qm = question_re.match(line)
        if qm:
            if not current_section:
                current_section = {
                    'name': '第一部分',
                    'score': 0,
                    'questions': []
                }
                sections.append(current_section)

            question_num += 1
            q_num = int(qm.group(1))
            stem = qm.group(2).strip()

            # Extract score from question
            q_score_match = re.search(r'[（\(](\d+)\s*分[）\)]', stem)
            q_score = int(q_score_match.group(1)) if q_score_match else 2

            current_question = {
                'num': q_num,
                'type': 'openEnded',
                'score': q_score,
                'stem': stem,
                'options': [],
                'answer': None,
                'answerText': '',
                'explain': ''
            }

            if not in_answer_section:
                current_section['questions'].append(current_question)
            continue

        if current_question:
            # Try to match option
            om = option_re.match(line)
            if om:
                current_question['options'].append(line)
                if len(current_question['options']) >= 2:
                    current_question['type'] = 'choice'
                continue

            # Try to match answer
            am = answer_re.match(line)
            if am:
                ans = am.group(1).strip()
                if current_question['type'] == 'choice' and len(ans) == 1 and ans.upper() in 'ABCD':
                    current_question['answer'] = ord(ans.upper()) - 65
                else:
                    current_question['answerText'] = ans
                continue

            # Append to stem
            if not in_answer_section:
                current_question['stem'] += '\n' + line

    # Auto-detect question types
    for sec in sections:
        for q in sec['questions']:
            stem = q['stem']
            if q['options']:
                q['type'] = 'choice'
            elif re.search(r'古诗|名句|默写|填写下句|补写', stem):
                q['type'] = 'ancientPoemFill'
            elif re.search(r'拼音|注音', stem):
                q['type'] = 'pinyinWrite'
            elif re.search(r'作文|写作', stem):
                q['type'] = 'composition'
                q['score'] = max(q['score'], 40)
            elif re.search(r'判断|对错', stem):
                q['type'] = 'judgement'
            elif re.search(r'修改|病句', stem):
                q['type'] = 'sentenceCorrection'
            elif re.search(r'排序|顺序', stem):
                q['type'] = 'sequenceOrder'
            elif re.search(r'阅读.*材料|阅读.*短文|阅读.*选文', stem):
                q['type'] = 'readingGroup'

    return {
        'year': year,
        'sections': sections,
        'totalQuestions': question_num
    }

def format_output(parsed, year, filename):
    """Format parsed data for review."""
    out = []
    out.append(f"=" * 60)
    out.append(f"Year: {year}  |  File: {filename}")
    out.append(f"Total Questions: {parsed['totalQuestions']}")
    out.append(f"Sections: {len(parsed['sections'])}")
    out.append(f"=" * 60)

    for si, sec in enumerate(parsed['sections']):
        out.append(f"\n--- Section {si+1}: {sec['name']} (Score: {sec['score']}) ---")
        for q in sec['questions']:
            out.append(f"\n  Q{q['num']} [{q['type']}] ({q['score']}pts)")
            # Truncate long stems
            stem_preview = q['stem'][:120] + ('...' if len(q['stem']) > 120 else '')
            out.append(f"    Stem: {stem_preview}")
            if q['options']:
                for opt in q['options'][:4]:
                    out.append(f"    {opt[:80]}")
            if q['answer'] is not None:
                out.append(f"    Answer: {chr(65 + q['answer'])}")
            elif q['answerText']:
                out.append(f"    Answer: {q['answerText'][:60]}")

    return '\n'.join(out)

def generate_js_paper(parsed, year):
    """Generate a JS paper object for zhongkao_data.js."""
    paper = {
        'id': f'yn{year}',
        'year': year,
        'region': '云南省',
        'city': '昆明市',
        'district': '',
        'title': f'{year}年云南省昆明市中考语文试题',
        'titleEn': f'{year} Yunnan Province Kunming Zhongkao Chinese',
        'totalScore': 100,
        'duration': 150,
        'hasAnswers': True,
        'hasAnalysis': False,
        'source': 'province',
        'sections': []
    }

    # Map section names
    sec_name_en = {
        '积累与运用': 'Knowledge & Application',
        '口语交际与语文综合运用': 'Oral & Comprehensive',
        '阅读': 'Reading',
        '写作': 'Composition',
        '阅读理解': 'Reading Comprehension',
        '语文知识积累': 'Language Knowledge',
        '综合性学习': 'Comprehensive Learning'
    }

    total_score = 0
    for sec in parsed['sections']:
        new_sec = {
            'id': f'sec{len(paper["sections"])+1}',
            'name': sec['name'],
            'nameEn': '',
            'score': sec['score'],
            'questions': []
        }

        # Try to match English name
        for cn, en in sec_name_en.items():
            if cn in sec['name']:
                new_sec['nameEn'] = en
                break
        if not new_sec['nameEn']:
            new_sec['nameEn'] = f'Part {len(paper["sections"])+1}'

        for q in sec['questions']:
            nq = {
                'num': q['num'],
                'type': q['type'],
                'score': q['score'],
                'stem': q['stem'],
                'stemEn': '',
                'gradeable': q['type'] in ('choice', 'readingChoice', 'judgement', 'fillBlank', 'pinyinWrite', 'ancientPoemFill')
            }

            if q['options']:
                nq['options'] = q['options']
                nq['optionsEn'] = []

            if q['answer'] is not None:
                nq['answer'] = q['answer']
            if q['answerText']:
                nq['answerText'] = q['answerText']
                nq['answerTextEn'] = ''

            if q['explain']:
                nq['explain'] = q['explain']
                nq['explainEn'] = ''

            nq['examPoint'] = ''
            nq['examPointEn'] = ''

            total_score += q['score']
            new_sec['questions'].append(nq)

        paper['sections'].append(new_sec)

    paper['totalScore'] = total_score if total_score > 0 else 100
    return paper

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    if len(sys.argv) < 2:
        print("Usage: python extract_zk_papers.py [year|--all|--list]")
        sys.exit(1)

    files = list_files()

    if sys.argv[1] == '--list':
        print(f"Found {len(files)} exam paper files in {BASE_DIR}:")
        for f in files:
            print(f"  {f['year']} | {f['ext']:4s} | {f['name']}")
        return

    if sys.argv[1] == '--all':
        targets = files
    else:
        year = int(sys.argv[1])
        targets = [f for f in files if f['year'] == year]
        if not targets:
            print(f"No file found for year {year}")
            sys.exit(1)

    all_papers = []

    for finfo in targets:
        filepath = os.path.join(BASE_DIR, finfo['name'])
        year = finfo['year']
        print(f"\n{'='*40}")
        print(f"Extracting: {finfo['name']} ({year})")
        print(f"{'='*40}")

        try:
            text = extract_file(filepath)
            if not text:
                print(f"  WARNING: No text extracted from {finfo['name']}")
                continue

            # Save raw text
            raw_path = os.path.join(OUTPUT_DIR, f'yn{year}_raw.txt')
            with open(raw_path, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f"  Raw text saved to: {raw_path}")

            # Parse
            parsed = parse_exam_text(text, year)

            # Save formatted review
            review = format_output(parsed, year, finfo['name'])
            review_path = os.path.join(OUTPUT_DIR, f'yn{year}_parsed.txt')
            with open(review_path, 'w', encoding='utf-8') as f:
                f.write(review)
            print(f"  Parsed review saved to: {review_path}")
            print(f"  Sections: {len(parsed['sections'])}, Questions: {parsed['totalQuestions']}")

            # Generate JS paper
            paper = generate_js_paper(parsed, year)
            all_papers.append(paper)

            # Save individual JSON
            json_path = os.path.join(OUTPUT_DIR, f'yn{year}.json')
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(paper, f, ensure_ascii=False, indent=2)
            print(f"  JSON saved to: {json_path}")

        except Exception as e:
            print(f"  ERROR: {e}")
            import traceback
            traceback.print_exc()

    if all_papers:
        # Save combined JSON
        combined_path = os.path.join(OUTPUT_DIR, 'all_extracted.json')
        with open(combined_path, 'w', encoding='utf-8') as f:
            json.dump(all_papers, f, ensure_ascii=False, indent=2)
        print(f"\n\nCombined {len(all_papers)} papers saved to: {combined_path}")
        print("Review the parsed files, then run: python build/inject_zk_papers.py")

    # Cleanup Word
    _quit_word_app()

if __name__ == '__main__':
    main()
