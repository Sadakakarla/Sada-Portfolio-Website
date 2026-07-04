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
- [x] `src/components/sections/About.tsx` — bio, stats, heading — done
- [x] `src/components/sections/Experience.tsx` — work history (5 roles: Handshake, A2IL, OnePay, C-ISFCR, UN Academic Impact)
- [x] `src/components/sections/Projects.tsx` — 7 projects (InferRoute, To3D, GlucoChat, PowerSight, NegotiableAI, AutismDiagnose, EagleEye) — github links set to "#" placeholder, need her actual repo URLs later
- [x] `src/components/sections/Education.tsx` — MS AI @ UB, BTech CS @ PES University — coursework left empty (not on her resume)
- [x] `src/components/sections/Contact.tsx` — email, location, GitHub/LinkedIn links, Calendly updated
- [x] `src/components/Footer.tsx` / `src/components/Navbar.tsx` — name/links (Navbar already had "SK." logo)
- [ ] `README.md` — update project description

**Phase 3 core sections: DONE.** Order changed — doing Phase 5 (contact backend) before Phase 4 (aesthetics), aesthetics saved for after whole site content is in place.

### Phase 4 — Aesthetic / frontend changes (doing this AFTER Phase 5, before deploy)
Goal: full visual overhaul so it doesn't look like "a guy's portfolio" — dark/light theme toggle stays, everything else fair game. Going one piece at a time. **Mode for this phase only**: assistant edits files directly (not guide-only like Phase 3) — propose changes in words first, get approval, implement, user reviews, iterate.

- [x] Rose/mauve palette (light `#B94A6C`, dark `#E88AA6`) was first choice — **SUPERSEDED**, see below.
- [x] `src/app/globals.css` — **FINAL palette: teal + peach + cream**, inspired by a reference "Creative Studio" portfolio design user liked. Light mode: bg `#FDF3E7`, fg `#1B3A35`, primary/teal `#1B6B5C`, new `--peach: #F2A785` var added. Dark mode: bg `#0D1A17`, fg `#F5EBDD`, primary/teal `#3ECFB8`, peach stays `#F2A785` both modes. Applied to `--primary`/`--accent`/`--ring`/`--sidebar-primary`/`--sidebar-ring` in both `:root` and `.dark`.
- [x] `src/app/globals.css` — decorative hex recolored to match: `dot-grid-bg` and loader keyframe glow (previously purple, now teal/peach). Also fixed a stale bug: loader text was referencing `var(--font-syne)` which no longer existed after the font swap — changed to `var(--font-fraunces)`.
- [x] `src/app/layout.tsx` + `globals.css` — fonts swapped: Syne→Fraunces (heading), JetBrains Mono→Manrope (body/mono), removed unused Instrument Serif. **Added**: Caveat script font (`--font-script`) for handwritten-style tagline/accent text.
- [x] `src/components/ui/circuit-grid.tsx` / `src/components/ui/neural-canvas.tsx` — **NeuralCanvas removed from Hero entirely** (file still exists, just unused now). CircuitGrid still used as global background wrapper in `page.tsx`, not yet recolored/touched — still has old purple RGB hardcoded, needs updating when we get to it.
- [ ] `src/components/Cursor.tsx` — custom cursor style — not started
- [ ] `src/components/LoadingScreen.tsx` — loading animation style — not started

- [~] **IN PROGRESS — Hero.tsx redesign** (first section tackled). Rewrote completely based on a reference image user liked (bold serif name, organic blob shapes behind photo, script tagline, sticker badge, floating sticky-note card, pill-shaped two-tone CTA buttons). Changes made: pill label badge, script-font tagline in peach, pill CTA buttons (one teal solid, one peach solid), organic blob shapes behind photo (teal blob + peach circle, blurred), "Open to Work" circular sticker badge (rotated), floating sticky-note card with heart icon, removed old rounded-pill photo frame/clipping so photo can eventually be a transparent cutout.
  - Photo is still the original `public/profile.png` (regular photo with background, NOT a transparent cutout yet) — cutout requires an external tool (remove.bg or similar), user hasn't done this yet.
  - Hit two dev-server issues along the way, both resolved: (1) Turbopack ChunkLoadError from stale cache, (2) image not refreshing after replacing `profile.png` — both fixed via `rm -rf .next && npm run dev` + hard browser refresh.
  - **User feedback (2026-07-04, latest)**: current result looks "small and weird" next to the reference — photo too small on screen, blob shapes too subtle/pale, sticker badge + sticky note feel disconnected/bolted-on rather than integrated like the reference (where the photo is much larger/near-full-height and the shapes are bold saturated colors filling more of the frame).
  - **NEXT STEP when resuming this session/task**: redo Hero sizing/proportions — make photo significantly larger (closer to reference's near-full-bleed photo), make blob shapes bigger and more saturated/less blurred-out, reposition badge/sticky-note so they visually overlap/anchor onto the photo rather than floating separately. Do this BEFORE moving to any other section (About, Skills, Experience, Projects, Education, Contact, Footer all still fully untouched aesthetically — still using generic default section styling).

### Phase 5 — Contact form backend ✅ DONE
- [x] She created her own [resend.com](https://resend.com) account + API key
- [x] Updated local `.env.local` with her `RESEND_API_KEY`
- [x] Updated `to:` recipient email in `src/app/api/contact/route.ts` to hers
- [x] Tested contact form locally — delivered successfully

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
