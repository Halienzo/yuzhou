# XCSC Data Fixes + Feature Enhancements Plan

## Part 1: Data Fixes

### 1A. Fix syntax error in xcsc_composition_data.js (CRITICAL)
- **Line 571**: Unescaped single quotes `'近大远小'` inside single-quoted `fullText` string
- Fix: Replace `'近大远小'` with `\u2018近大远小\u2019` (or escape with `\'`)
- Check for any other unescaped single quotes in the file

### 1B. Add missing `explain` fields to xcsc_data.js
- **276 out of 409 questions** lack explanations (67%)
- Worst papers (100% missing): `yn2018` (24/24), `km2018` (24/24), `yn2014` (19/19)
- Will use a build script (`build/gen_xcsc_explains.js`) to generate explain fields for **auto-gradeable** questions:
  - `choice` (131 q): explain why the correct option is right
  - `fillBlank` (89 q): explain the expected answer
  - `judgement` (4 q): explain true/false reasoning
  - `pinyinWrite` (19 q): explain character/pinyin correspondence
- Non-gradeable types (composition, openEnded, readingQA) don't need `explain` — they already have reference answers in `answerText`
- **Estimated impact**: ~150-200 questions get explanations added

### 1C. Add missing `examPoint` fields to xcsc_data.js
- **191 out of 409 questions** lack exam point labels (47%)
- Build script infers exam point from question type + content:
  - choice → "选择题" + section context
  - fillBlank → "填空题 · 字词运用"
  - pinyinWrite → "看拼音写词语"
  - etc.

### 1D. Fix 2 papers with `hasAnswers: false`
- `yn2012` and `yn2014` — answers exist in `answerText` fields already but the flag is wrong
- Verify: if questions have `answerText`, flip `hasAnswers: true`

## Part 2: Feature Enhancements (in `Chinese chars.html`)

### 2A. Auto-save mid-quiz (断点续答)
**State**: `xcscDraft_{paperId}` in localStorage
- On every `xcscSaveAnswer` / `xcscPickChoice` / `xcscPickJudge`, debounce-save quiz state:
  ```
  { answers: xcscState.quizAnswers, seconds: xcscState.quizSeconds, date: Date.now() }
  ```
- On `xcscStartQuiz(paperId)`, check for existing draft:
  - If found and < 24h old → prompt "继续上次答题？" with resume/restart buttons
  - Resume: restore answers + timer, render paper with pre-filled answers
  - Restart: clear draft, start fresh
- On `xcscSubmitQuiz`, delete the draft
- ~30 lines JS

### 2B. Question-type filter practice mode (按题型练习)
**New sub-module**: accessible from dashboard or panel
- `xcscTypePractice(type)` — collect all questions of a given type across all papers
- Show a practice card UI: one question at a time, next/prev, check answer
- Types offered (grouped by count ≥ 4):
  - 选择题 choice (131)
  - 填空题 fillBlank (89)
  - 阅读问答 readingQA (68)
  - 开放题 openEnded (38)
  - 看拼音写词 pinyinWrite (19)
  - 作文 composition (17)
  - 古诗填空 poemFill (8)
  - 句子改写 sentenceTransform (7)
- Dashboard gets a "按题型练习" section below the paper grid
- Panel gets a 4th item: "题型练习 / Type Practice"
- ~80 lines JS

### 2C. Score trend chart (成绩趋势图)
**In Statistics sub-view**: add a simple SVG line chart
- X-axis: completed papers (sorted by completion date)
- Y-axis: score percentage (0-100%)
- Dots + connecting lines, hover shows paper name + score
- Uses inline SVG (no library) — same pattern as HSK matrix
- ~50 lines JS

## Files Modified
| File | Changes |
|------|---------|
| `xcsc_composition_data.js` | Fix syntax error (1 line) |
| `xcsc_data.js` | Add explain/examPoint fields, fix hasAnswers flags |
| `Chinese chars.html` | 2A (auto-save ~30 lines), 2B (type practice ~80 lines), 2C (trend chart ~50 lines) |
| `build/gen_xcsc_explains.js` | New build script for bulk explain generation |

## Implementation Order
1. Fix composition data syntax error (blocks loading)
2. Fix hasAnswers flags in xcsc_data.js
3. Build script for explains + examPoints → run → update xcsc_data.js
4. Auto-save mid-quiz feature
5. Question-type filter practice
6. Score trend chart
