#!/usr/bin/env python3
"""
字道 ZiDao — PDF Textbook Text Extractor
Extracts raw text from 部编版 Chinese textbook PDFs.
Output: one .txt file per PDF with === Page N === markers.

Usage:
  python build/extract_textbook.py                    # Extract all PDFs
  python build/extract_textbook.py --grade 2          # Extract grade 2 only
  python build/extract_textbook.py --grade 2 --sem 1  # Extract G2S1 only
"""

import os
import sys
import re
import argparse
from PyPDF2 import PdfReader

# Project root
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(ROOT, 'build', 'extracted')

# PDF naming pattern: 部编版X年级语文上/下册【高清教材】.pdf
def find_pdf(grade, semester):
    """Find the PDF file for a given grade and semester."""
    sem_cn = '上' if semester == 1 else '下'
    pattern = f'部编版{grade}年级语文{sem_cn}册'
    for f in os.listdir(ROOT):
        if f.endswith('.pdf') and pattern in f:
            return os.path.join(ROOT, f)
    return None

def extract_pdf(pdf_path, output_path):
    """Extract text from a PDF, writing page-by-page to a text file."""
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"  Pages: {total_pages}")

    with open(output_path, 'w', encoding='utf-8') as f:
        for i, page in enumerate(reader.pages):
            f.write(f"=== Page {i+1} ===\n")
            text = page.extract_text() or ''
            # Clean up common extraction artifacts
            text = text.replace('\x00', '')
            # Normalize whitespace but preserve newlines
            lines = text.split('\n')
            cleaned = []
            for line in lines:
                line = line.strip()
                if line:
                    cleaned.append(line)
            f.write('\n'.join(cleaned))
            f.write('\n\n')

    print(f"  Output: {output_path} ({os.path.getsize(output_path)//1024}KB)")
    return total_pages

def main():
    parser = argparse.ArgumentParser(description='Extract text from Chinese textbook PDFs')
    parser.add_argument('--grade', '-g', type=int, help='Grade number (1-9)')
    parser.add_argument('--sem', '-s', type=int, choices=[1, 2], help='Semester (1 or 2)')
    args = parser.parse_args()

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    grades = [args.grade] if args.grade else list(range(1, 10))
    semesters = [args.sem] if args.sem else [1, 2]

    total_extracted = 0
    for grade in grades:
        for sem in semesters:
            pdf_path = find_pdf(grade, sem)
            if not pdf_path:
                print(f"[SKIP] G{grade}S{sem}: PDF not found")
                continue

            output_name = f"g{grade}s{sem}_extracted.txt"
            output_path = os.path.join(OUTPUT_DIR, output_name)

            print(f"[EXTRACT] G{grade}S{sem}: {os.path.basename(pdf_path)}")
            try:
                pages = extract_pdf(pdf_path, output_path)
                total_extracted += 1
            except Exception as e:
                print(f"  ERROR: {e}")

    print(f"\nDone! Extracted {total_extracted} textbook(s) to {OUTPUT_DIR}")

if __name__ == '__main__':
    main()
