# Skill: Done for Day
## End Session Protocol

**Trigger:** "done for today", "end session", "wrap up"

---

## Protocol Steps

### Step 1: Run Build Check
```bash
npm run build
```
- Ensure no build errors
- Fix any issues before proceeding

### Step 2: Summarize Session
Create a summary of:
- What was accomplished
- Any issues encountered
- What's next

### Step 3: Update STATUS.md
Update the following sections:
- **Active Focus** - Set to next priority or "Ready for next task"
- **Last Updated** - Current date
- **Session** - Brief description

### Step 4: Add LOG.md Entry
Add new entry at TOP of LOG.md:
```markdown
## YYYY-MM-DD | [Session Title]

**Session Type:** [Development/Bug Fix/Feature/etc.]

### What Was Done
- Item 1
- Item 2

### Files Changed
- file1.ts
- file2.tsx

### Outcome
[Brief result]

---
```

### Step 5: Checkpoint
```bash
./ops/checkpoint.sh "End of day: [brief summary]"
```

### Step 6: Confirm Completion
Print:
```
Session ended. State files updated.
Next session: Read STATUS.md, PLAN.md, LOG.md first.
```

---

## Example Output

```
Build: PASSED

Session Summary:
- Fixed chat widget API integration
- Added error handling for webhooks
- Updated styling on NDIS calculator

STATUS.md: Updated
LOG.md: Entry added

Checkpoint: [2026-01-21 17:30] End of day: Chat widget fixes and styling updates

Session ended. State files updated.
Next session: Read STATUS.md, PLAN.md, LOG.md first.
```
