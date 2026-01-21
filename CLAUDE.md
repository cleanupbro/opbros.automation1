# CLAUDE.md - Coding AI Adapter
## OpBros Automation | Titanium Sealed Universe Protocol v4.0

---

## Initialization Checklist

**BEFORE ANY WORK, READ THESE IN ORDER:**

1. [ ] `STATUS.md` - Current state, active focus, blockers
2. [ ] `PLAN.md` - Roadmap, priorities, backlog
3. [ ] `LOG.md` - Recent sessions, what was done

**THEN:**
- Confirm understanding of current context
- Ask clarifying questions if needed
- Proceed with task

---

## Guardrail Enforcement Rules

### MUST DO
- Update `STATUS.md` after every significant change
- Add entry to `LOG.md` at session end
- Run `./ops/guardrail.sh` before commits
- Use `./ops/checkpoint.sh "message"` for safe saves

### MUST NOT
- Skip reading state files
- Make changes without understanding current context
- Commit without running guardrails
- Modify files outside boundaries without permission

---

## Skills Triggers

| Trigger | Skill File | Action |
|---------|------------|--------|
| "done for today" | `docs/skills/done-for-day.md` | End session protocol |
| "deploy" | `docs/skills/deploy.md` | Deployment steps |
| "bug fix" / "debug" | `docs/skills/bug-fix.md` | Debugging protocol |

---

## Boundary Definitions

### Claude Domain (src/)
- All application code
- Components, pages, hooks, utils
- Styling and configuration
- API routes

### Strategic Domain (agents/)
- Bot definitions
- Automation workflows
- External integrations

### Shared (docs/, ops/)
- Documentation
- Operational scripts
- Skill definitions

---

## Tech Stack Reference

```
Framework:    Next.js 14.2 + React 18.3
Language:     TypeScript 5.0
Styling:      Tailwind CSS 3.4
Icons:        Lucide React
Backend:      N8N at nioctibinu.online
```

## Design Tokens

```css
--google-blue:    #4285f4
--google-red:     #ea4335
--google-yellow:  #fbbc04
--google-green:   #34a853
--apple-gray-900: #1D1D1F
--accent:         #0071e3
```

---

## Quick Commands

```bash
# Development
npm run dev         # Start dev server
npm run build       # Production build
npm run lint        # Run linter

# Protocol
./ops/guardrail.sh              # Check freshness
./ops/checkpoint.sh "message"   # Safe commit
```

---

## Business Context

- **Target:** 5-50 employee businesses in Sydney
- **Industries:** NDIS Providers, Trades & Services, Healthcare
- **Pricing:** Starting at $500
- **Guarantee:** 30-day ROI
- **Live URL:** opbros.online

---

*Protocol Active. Read state files before every session.*
