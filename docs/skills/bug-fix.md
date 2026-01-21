# Skill: Bug Fix
## Debugging Protocol

**Trigger:** "bug fix", "debug", "fix error", "something's broken"

---

## Debugging Workflow

### Step 1: Reproduce the Issue
- Get exact steps to reproduce
- Note the expected vs actual behavior
- Identify environment (dev/prod, browser, device)

### Step 2: Gather Information
```bash
# Check for build errors
npm run build

# Check for type errors
npx tsc --noEmit

# Check browser console for errors
# (manually in browser DevTools)
```

### Step 3: Isolate the Problem
Questions to answer:
- Which component/file is affected?
- When did it start (recent changes)?
- Is it reproducible consistently?

### Step 4: Check Recent Changes
```bash
# See recent commits
git log --oneline -10

# Check what changed in specific file
git diff HEAD~5 -- src/path/to/file.tsx
```

### Step 5: Fix and Test
1. Make minimal fix (don't over-engineer)
2. Test the specific scenario
3. Test related functionality
4. Run build to ensure no regressions

### Step 6: Document

**In code (if non-obvious fix):**
```typescript
// Fixed: [brief description of what was wrong]
```

**In LOG.md:**
```markdown
### Bug Fix: [Title]
- **Issue:** [description]
- **Cause:** [root cause]
- **Fix:** [what was changed]
- **Files:** [affected files]
```

---

## Error Logging

For significant bugs, also log to central hub:
`/Users/shamalkrishna/Documents/cleanupbros-os/_CENTRAL/ERROR_LOG.md`

Format:
```markdown
## YYYY-MM-DD | [Project] - [Error Title]

**Error:** [error message]
**Location:** [file:line]
**Cause:** [root cause]
**Fix:** [solution]
**Lesson:** [what to remember]
```

---

## Common Issues Reference

### Build Errors
- Check for missing imports
- Verify TypeScript types
- Ensure all dependencies installed (`npm install`)

### API/Webhook Issues
- Verify N8N webhooks at nioctibinu.online
- Check CORS settings
- Verify request/response format

### Styling Issues
- Check Tailwind class names
- Verify responsive breakpoints
- Test in multiple browsers

### Chat Widget Issues
- Check API endpoint configuration
- Verify response format handling
- Check for console errors

---

## Emergency Fix Protocol

For production-breaking bugs:

1. **Assess severity** - Is site down? Data loss? UX issue?

2. **Quick fix if possible:**
   ```bash
   # Make fix
   npm run build
   ./ops/checkpoint.sh "HOTFIX: [description]"
   git push origin main
   ```

3. **Or rollback:**
   ```bash
   git revert HEAD
   git push origin main
   ```

4. **Then investigate properly** after site is stable.
