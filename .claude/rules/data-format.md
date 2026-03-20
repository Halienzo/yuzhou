# Textbook Data Format Rules

## File Structure
Each textbook file assigns to `window.TB_G{N}S{M}`:
```javascript
window.TB_G7S1 = {
  grade: 7, semester: 1, label: "七年级上册",
  units: [
    {
      id: 1, title: "...", titleEn: "...",
      lessons: [
        {
          id: 1, title: "春", titleEn: "Spring",
          author: "朱自清", authorEn: "Zhu Ziqing",
          text: ["paragraph1", "paragraph2"],      // Chinese text array
          textEn: ["English para1", "English para2"], // MUST match text.length
          difficulty: 3,
          // Optional fields:
          textPinyin: ["pinyin1", "pinyin2"],
          authorBio: {cn: "...", en: "..."},
          preview: [{cn: "...", en: "..."}],
          exercises: [...],
          vocabWords: [...],
          footnotes: [...],
          multiText: [...]  // For compound lessons like 散文二篇
        }
      ]
    }
  ]
};
```

## Key Constraints
- Keys are UNQUOTED: `title: "..."` not `"title": "..."`
- Chinese text may use `\uXXXX` escapes or plain characters — search both forms
- `text[]` and `textEn[]` MUST have equal length for English toggle to work
- Classical texts (wenyanwen) may be single-paragraph even if textEn has multiple
- `multiText` lessons also have top-level `text/textEn` as fallback
