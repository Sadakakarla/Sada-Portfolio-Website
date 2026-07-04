# Portfolio Fork Project — Progress Tracker

**Goal**: Create a separate copy of this portfolio website for another person (same field/experience as user), on her own GitHub account + Vercel account, deployed independently.

**Status as of**: 2026-07-04 — Phase 1 complete. Tracker now lives inside project folder.

**Project folder**: `~/Documents/Github/Sada's Portfolio Website`

---

## Context / Decisions Made

- Source project: `Portfolio Website/portfolio` (Next.js 16 + React 19 + TS + Tailwind 4).
- New person is in the **same field, similar experience** as user — no field-specific redesign assumptions needed.
- **Auth strategy**: Use GitHub Desktop (separate login session) to push to her GitHub account, instead of SSH keys/PAT — avoids terminal git auth conflict since terminal stays logged in as user's own account throughout.
- **Vercel deploy**: Done entirely via browser (her Vercel account, already/will be logged in) — no `vercel` CLI used, avoids same terminal-auth conflict.
- Fresh git history for new repo (no trace of user's commits).
- User wants to do all execution steps themselves — assistant provides guidance only, no autonomous edits/pushes.

---

## Step-by-Step Plan

### Phase 1 — Local project setup ✅ DONE
- [x] Copy `Portfolio Website/portfolio` folder to `~/Documents/Github/Sada's Portfolio Website`
- [x] Remove `.git`, `.next`, `node_modules` from the copy
- [x] `npm install` fresh in new location
- [x] `git init`
- [x] `git add .` + initial commit

### Phase 2 — GitHub account switch (her account) ✅ DONE
- [x] Open GitHub Desktop → signed in as her
- [x] Browser: created empty repo `Sada-Portfolio-Website` under her GitHub account
- [x] GitHub Desktop: Add Local Repository → selected project folder
- [x] Pushed via GitHub Desktop (not terminal — see lesson below) → `Sada-Portfolio-Website`
- [x] Verified files present on her GitHub

**Lesson learned**: GitHub Desktop's "Publish repository" auto-creates a new repo (`Sada-s-Portfolio-Website`, private, duplicate) if local repo isn't linked yet — don't rely on it, link to existing repo via `git remote set-url` first. Also: terminal `git push` failed with 403 even after fixing remote URL, because macOS Keychain had cached credentials for the user's own GitHub account — terminal auth always defaults to user's account regardless of remote URL. **Push must be done via GitHub Desktop app itself** (signed in as her), never via terminal, for any push to her repo. Duplicate private repo `Sada-s-Portfolio-Website` should be deleted via browser Settings.

### Phase 3 — Content swap (section by section, at own pace)
Files to edit, in order:
- [x] `src/components/sections/Hero.tsx` — name, tagline, role/location label, social links, resume link, photo alt text
- [x] `public/profile.png` — swapped photo
- [x] `src/app/layout.tsx` — page `metadata.title` updated to her name
- [x] `src/app/favicon.ico` — swapped favicon (initials icon)
- [ ] `src/components/sections/About.tsx` — bio, stats
- [ ] `src/components/sections/Experience.tsx` — work history
- [ ] `src/components/sections/Projects.tsx` — project details
- [ ] `src/components/sections/Education.tsx` — education details
- [ ] `src/components/sections/Contact.tsx` — email, social links
- [ ] `src/components/Footer.tsx` / `src/components/Navbar.tsx` — name/links
- [ ] `README.md` — update project description

### Phase 4 — Aesthetic / frontend changes
Goal: make it visually distinct from user's own portfolio (not a design overhaul, just differentiation).
- [ ] `src/app/globals.css` — color palette / theme CSS variables
- [ ] `src/app/layout.tsx` — font choices (Google Fonts)
- [ ] `src/components/ui/circuit-grid.tsx` / `src/components/ui/neural-canvas.tsx` — background animation styling
- [ ] `src/components/Cursor.tsx` — custom cursor style
- [ ] `src/components/LoadingScreen.tsx` — loading animation style
- [ ] Decide specifics (colors/fonts) when reaching this phase

### Phase 5 — Contact form backend
- [ ] She creates her own [resend.com](https://resend.com) account + API key
- [ ] Update local `.env.local` with her `RESEND_API_KEY` (and any recipient email var)
- [ ] Check `src/app/api/contact/route.ts` for hardcoded email addresses — update to hers
- [ ] Test contact form locally (`npm run dev`)

### Phase 6 — Deploy on her Vercel (browser only, no CLI)
- [ ] Her Vercel dashboard → Add New Project → Import from GitHub → select her repo
- [ ] Add environment variables in Vercel (Settings → Environment Variables) — match `.env.local`
- [ ] Deploy
- [ ] Verify live site loads, contact form works end-to-end

### Phase 7 — Optional: custom domain
- [ ] Add domain in Vercel project → Domains
- [ ] Point DNS records at Vercel from her domain registrar

### Phase 8 — Cleanup
- [ ] GitHub Desktop → switch active account back to user's own GitHub
- [ ] Confirm terminal git config was never altered (should still be user's own throughout)

---

## Notes
- No task in this plan requires the user's terminal to authenticate as her — by design.
- Resume him/her content was shared only for structural reference (section understanding), not copy-pasted directly — user will fill each section manually.
- Update the checkboxes above as each phase/step completes to track progress across sessions.
