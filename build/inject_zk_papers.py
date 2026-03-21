#!/usr/bin/env python3
"""
inject_zk_papers.py — Merge extracted papers into zhongkao_data.js
Reads all_extracted.json and existing zhongkao_data.js, merges new papers.
"""

import os
import sys
import re
import json

BUILD_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(BUILD_DIR)
EXTRACTED_FILE = os.path.join(BUILD_DIR, 'tmp_docs', 'all_extracted.json')
ZK_DATA_FILE = os.path.join(BASE_DIR, 'zhongkao_data.js')

def read_existing_data():
    """Read existing zhongkao_data.js and extract the JSON data."""
    with open(ZK_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract JSON from window.ZK_DATA = {...};
    match = re.search(r'window\.ZK_DATA\s*=\s*(\{[\s\S]+\})\s*;?\s*$', content)
    if not match:
        print("ERROR: Could not parse zhongkao_data.js")
        sys.exit(1)

    return json.loads(match.group(1))

def main():
    # Read extracted papers
    with open(EXTRACTED_FILE, 'r', encoding='utf-8') as f:
        new_papers = json.load(f)
    print(f"Read {len(new_papers)} extracted papers")

    # Read existing data
    existing = read_existing_data()
    existing_ids = {p['id'] for p in existing['papers']}
    print(f"Existing papers: {len(existing['papers'])} ({', '.join(sorted(existing_ids))})")

    # Filter out papers that already exist (yn2023, yn2024, yn2025)
    papers_to_add = [p for p in new_papers if p['id'] not in existing_ids]
    print(f"New papers to add: {len(papers_to_add)}")

    if not papers_to_add:
        print("No new papers to add!")
        return

    # Sort all papers by year
    all_papers = existing['papers'] + papers_to_add
    all_papers.sort(key=lambda p: p['year'])

    existing['papers'] = all_papers

    # Write updated file
    js_content = '/* zhongkao_data.js \u2014 \u4E2D\u8003\u8BED\u6587\u771F\u9898 (Zhongkao Chinese Exam Papers)\n'
    js_content += f' * {len(all_papers)} papers: ' + ', '.join(p['id'] for p in all_papers) + '\n'
    js_content += ' * Based on Yunnan Province Kunming City exam papers\n'
    js_content += ' */\n'
    js_content += 'window.ZK_DATA = '
    js_content += json.dumps(existing, ensure_ascii=False, indent=2)
    js_content += ';\n'

    with open(ZK_DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"\nUpdated {ZK_DATA_FILE}")
    print(f"Total papers: {len(all_papers)}")
    total_questions = sum(
        sum(len(s.get('questions', [])) for s in p.get('sections', []))
        for p in all_papers
    )
    print(f"Total questions: {total_questions}")

    # Verify
    with open(ZK_DATA_FILE, 'r', encoding='utf-8') as f:
        verify = f.read()
    if 'window.ZK_DATA' in verify:
        print("\nVerification: OK")
    else:
        print("\nVerification: FAILED!")

if __name__ == '__main__':
    main()
