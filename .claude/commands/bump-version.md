# /bump-version — Increment Version Number

Bump the app version in both the HTML file and service worker.

## Steps
1. Find current version in `Chinese chars.html` (search for pattern `>v\d+<` around line 6210)
2. Find current cache version in `sw.js` (search for `CACHE_NAME = 'yuzhou-v\d+'`)
3. Increment both to vN+1
4. Report what was changed

## Rules
- HTML version and SW cache version MUST always match
- Only bump when there are actual code/data changes to deploy
