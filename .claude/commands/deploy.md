# /deploy — Build, Verify, Commit, and Push

Deploy the current state to GitHub.

## Steps
1. Run `/audit` to verify all textbook data is clean
2. Check `git status` for modified files
3. If audit passes and there are changes:
   a. Show the user what will be committed (files + diff summary)
   b. Ask for commit message or suggest one based on changes
   c. Stage relevant files (NOT build/_* temp scripts, NOT node_modules)
   d. Commit with the message
   e. Push to origin/main
4. Verify push succeeded

## Rules
- Never stage `node_modules/`, `build/_*.js` temp scripts, or `.xlsx` files
- Always bump version in HTML and sw.js cache if textbook/HTML changes are included
- Always run audit BEFORE committing
