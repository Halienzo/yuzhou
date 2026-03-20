# Coding Style Rules

## HTML File (Chinese chars.html)
- Single monolithic file (~21,100+ lines) — always use offset/limit when reading
- ES5 syntax (var, function, no arrow functions, no template literals) for browser compatibility
- All state in global objects: `S`, `tbState`, `grState`, `pyState`, etc.
- Module pattern: `enterX()` / `exitX()` pairs for each module
- `navigateTo(v)` for safe view switching

## Build Scripts (build/*.js)
- Node.js CommonJS (`require`, not import)
- `var` declarations (consistent with main app style)
- Use `vm.runInNewContext()` to parse textbook JS files safely
- Temp/one-off scripts prefixed with `_` (e.g., `_fix_typos.js`)
- Permanent build scripts without prefix (e.g., `gen_hsk_data.js`)

## Git Conventions
- Commit messages: imperative mood, describe what + why
- Include version number in commit if HTML/SW changed (e.g., "Fix X (v37)")
- Never commit `node_modules/`, temp build scripts, or generated JSON
