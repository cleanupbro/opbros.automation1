# Skill: Deploy
## Deployment Protocol for OpBros Automation

**Trigger:** "deploy", "push to production", "go live"

---

## Pre-Deploy Checklist

Before deploying, verify:

- [ ] Build passes: `npm run build`
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Tested on mobile viewport
- [ ] Environment variables set
- [ ] STATE.md updated
- [ ] LOG.md has entry

---

## Deployment Steps

### Step 1: Run Final Build
```bash
npm run build
```
Must complete with no errors.

### Step 2: Test Production Build Locally (Optional)
```bash
npm run start
```
Visit http://localhost:3000 and verify.

### Step 3: Run Guardrails
```bash
./ops/guardrail.sh
```
Must pass before proceeding.

### Step 4: Checkpoint
```bash
./ops/checkpoint.sh "Pre-deploy: [feature/fix description]"
```

### Step 5: Push to Remote
```bash
git push origin main
```

### Step 6: Verify Deployment
For Vercel (automatic):
- Check Vercel dashboard for build status
- Visit https://opbros.online once deployed
- Test critical paths:
  - [ ] Homepage loads
  - [ ] Chat widget works
  - [ ] NDIS calculator functions
  - [ ] Contact forms submit

### Step 7: Update State
Add deployment note to LOG.md:
```markdown
**Deployed:** YYYY-MM-DD HH:MM
**URL:** https://opbros.online
**Changes:** [brief list]
```

---

## Rollback Procedure

If issues found in production:

1. **Quick rollback:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Or via Vercel dashboard:**
   - Go to Deployments
   - Find last working deployment
   - Click "..." > "Promote to Production"

---

## Environment Variables

Required in Vercel:
- API endpoints for N8N webhooks
- Any third-party API keys

Check `.env.example` for reference.

---

## Post-Deploy

After successful deployment:
1. Test live site
2. Update STATUS.md with deployment note
3. Notify stakeholders if needed
