# /audit — Full Textbook Audit

Run comprehensive audit across all G1-G9 textbook files.

## Steps
1. Run `node build/_final_audit.js` — checks G7-G9 for wrong content, duplicates, paragraph alignment
2. Run `node build/_audit_g1g6.js` — checks G1-G6 for the same issues
3. Run `node build/_e2e_verify.js` — simulates HTML renderer to verify all 476 lessons display English correctly
4. Report results summary

If any issues are found, list them and suggest fixes. Do NOT auto-fix without user confirmation.
