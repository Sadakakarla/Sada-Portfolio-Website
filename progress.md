# Portfolio Fork Project — Progress Tracker

**Goal**: Create a separate copy of this portfolio website for another person (same field/experience as user), on her own GitHub account + Vercel account, deployed independently.

**Status as of**: 2026-07-04 — Phase 1-3, 4, 5 complete. Phase 4 (aesthetics) finalized as-is by user — remaining sections (About, Skills, Experience, Education, Contact, Footer, Cursor, LoadingScreen) intentionally left on generic default styling, not a gap. Next up: Phase 6 (deploy).

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
- [x] `README.md` — updated project description

**Phase 3 core sections: DONE.** Order changed — doing Phase 5 (contact backend) before Phase 4 (aesthetics), aesthetics saved for after whole site content is in place.

### Phase 4 — Aesthetic / frontend changes ✅ DONE (finalized as-is, 2026-07-04)
Goal: full visual overhaul so it doesn't look like "a guy's portfolio" — dark/light theme toggle stays, everything else fair game. Going one piece at a time. **Mode for this phase only**: assistant edits files directly (not guide-only like Phase 3) — propose changes in words first, get approval, implement, user reviews, iterate.

- [x] Rose/mauve palette (light `#B94A6C`, dark `#E88AA6`) was first choice — **SUPERSEDED**, see below.
- [x] `src/app/globals.css` — **FINAL palette: teal + peach + cream**, inspired by a reference "Creative Studio" portfolio design user liked. Light mode: bg `#FDF3E7`, fg `#1B3A35`, primary/teal `#1B6B5C`, new `--peach: #F2A785` var added. Dark mode: bg `#0D1A17`, fg `#F5EBDD`, primary/teal `#3ECFB8`, peach stays `#F2A785` both modes. Applied to `--primary`/`--accent`/`--ring`/`--sidebar-primary`/`--sidebar-ring` in both `:root` and `.dark`.
- [x] `src/app/globals.css` — decorative hex recolored to match: `dot-grid-bg` and loader keyframe glow (previously purple, now teal/peach). Also fixed a stale bug: loader text was referencing `var(--font-syne)` which no longer existed after the font swap — changed to `var(--font-fraunces)`.
- [x] `src/app/layout.tsx` + `globals.css` — fonts swapped: Syne→Fraunces (heading), JetBrains Mono→Manrope (body/mono), removed unused Instrument Serif. **Added**: Caveat script font (`--font-script`) for handwritten-style tagline/accent text.
- [x] `src/components/ui/circuit-grid.tsx` / `src/components/ui/neural-canvas.tsx` — **NeuralCanvas removed from Hero entirely** (file still exists, just unused now). CircuitGrid still used as global background wrapper in `page.tsx`, not yet recolored/touched — still has old purple RGB hardcoded, needs updating when we get to it.
- [x] **Global site-wide background — DONE.** Removed `circuit-grid.tsx` entirely (deleted file + import in `page.tsx`) — was a purple techy circuit-board/data-pulse canvas running the full page length, decided it clashed with the warm palette. Replaced with new `src/components/ui/page-texture.tsx`, two exports:
  - `GrainOverlay` — fixed, full-viewport subtle film-grain (SVG `feTurbulence` noise, `mix-blend-overlay`, opacity `0.22`, 200px tile) sitting on top of everything (z-40) as an ambient texture layer.
  - `DoodleField` — ~50 small scattered hand-drawn-style marks (sparkle/plus/ring/squiggle line icons in teal/peach, `currentColor`-free but pulled from CSS vars) drifting gently, deterministic positions (no `Math.random` — avoids SSR/hydration mismatch), placed behind all section content.
  - **Stacking gotcha hit & fixed**: `SectionWrapper`'s `motion.section` has a `transform` (from its scroll-linked y-animation) which creates its own stacking context — this silently beat z-index changes on the doodle layer regardless of value, both hiding doodles (when doodle z was low) and later showing them on top of cards (when doodle z was raised too high). Fixed properly by giving `SectionWrapper` (and `Footer`, same issue) explicit `relative z-10`, and keeping `DoodleField` at `z-0` — this makes each section's entire subtree (cards included) reliably stack above the doodle layer, whatever the doodle count/opacity. Note for later: any *new* section-level component should also get `relative z-10` (or higher) if it needs to sit above `DoodleField`.
  - Also fixed a real bug in `GRAIN_SVG`: originally wrote `url(%23n)` (pre-encoded `#`) inside a string that then got passed through `encodeURIComponent`, double-encoding the `%` and breaking the filter reference — fixed to plain `url(#n)` before encoding. Also gave the noise SVG explicit `width/height="200"` (was defaulting to a stretched low-res tile).
- [ ] `src/components/Cursor.tsx` — custom cursor style — not started
- [ ] `src/components/LoadingScreen.tsx` — loading animation style — not started

- [x] **Projects.tsx — FINALIZED.** Reskinned to match Hero's visual language (no imagery assets exist, so did a thorough reskin rather than a full editorial/image-based redesign):
  - Section label switched to pill-badge style (matches Hero), heading period accent recolored teal→peach.
  - Fixed a hardcoded purple glow bug on the active-card shadow (`rgba(109,40,217,...)` leftover from the old palette) → teal (`rgba(27,107,92,...)`).
  - Tech-tag chips restyled from flat teal outlines to alternating peach/gold pill chips (`color-mix` for tinted borders/backgrounds).
  - Cards get a subtle tilt+lift on hover (sticky-note feel), consistent with Hero's playful-but-subtle animation direction agreed earlier.
  - **Layout restructured** (user's request): removed the old two-column "grid + sticky detail panel" layout entirely. Now a single expandable grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) — clicking a card expands it in place (`sm:col-span-2 lg:col-span-3`, full bullets/tags/script-font tagline/GitHub button reveal) using Framer Motion `layout` animations on both the grid container and each card, so other cards smoothly reflow around the expanded one. Click again (or another card) to collapse/switch.
  - **Bug hit & fixed**: expanding a card revealed the background `DoodleField` doodles bleeding through on top of the card's text. Root cause wasn't z-index/stacking (that part was already correctly fixed earlier) — the **active card's background was `bg-primary/5`** (a near-transparent 5% tint) instead of the opaque `bg-card` used by inactive cards, so the doodle sitting behind was showing straight through the wash. Fixed by keeping `bg-card` (opaque) on the active state too, using only the border color + shadow to indicate "active". **Lesson for later sections**: any "active/selected" card state must keep an opaque background, not just a low-opacity tint, or the global doodle field will show through it.

**Phase 4 finalized (2026-07-04)**: user decided Hero, global background (grain+doodles), and Projects aesthetic pass is enough — About, Skills, Experience, Education, Contact, Footer, Cursor.tsx, LoadingScreen.tsx staying on generic default styling by choice, not left undone. Moving to Phase 6.

- [x] **Hero.tsx — FINALIZED.** Redesigned based on reference image (bold serif name, arch shape behind photo, script tagline, sticker/sticky-note, pill CTA buttons). Final state:
  - Photo enlarged near-full-bleed, aligned exactly to the arch shape's bounding box (`top-0 right-[6%] w-[80%] h-[92%]`) so edges line up cleanly — no more gap/seam between photo and arch.
  - Arch shape recolored from peach to new **gold** (`--gold: #F2C078`, added to `globals.css` in both `:root`/`.dark`) — peach demoted to small accent-dot use only.
  - Added solid teal circle bleeding off the top-right viewport corner (decorative, no text) with a small peach dot inside it, matching reference's corner shape.
  - Sparkle SVG accent moved from next to the name → top-left of the photo/arch block.
  - **"Open to Work" sticker badge removed entirely** (was overlapping oddly, user wanted the corner-circle look without a text badge).
  - Floating sticky-note card kept, enlarged, still bottom-left-overlapping the photo.
  - Overall scale bumped up site-wide in Hero: name `text-6xl md:text-8xl`, container widened to `max-w-[1600px]`, section padding tightened (`px-6 md:px-16`), photo container up to `md:w-[560px] md:h-[78vh]`, CTA buttons bigger (`px-8 py-4`) — matches reference's bolder/larger feel instead of small-and-centered.
  - Photo/arch block given `mt-16 md:mt-24` so it clears the navbar (was overlapping it before).
  - Tried a wavy/scalloped clip-path on the photo's bottom edge (reference-inspired) — looked bad (jagged zigzag cutting mid-body), **reverted to flat bottom**. Revisit later only if a smooth scallop/mask approach is wanted — low priority, not blocking.
  - Photo is still the original `public/profile.png` (regular photo with background, not a transparent cutout) — cutout still pending, requires external tool (remove.bg or similar), user hasn't done this yet.
  - **New**: `src/components/ui/floating-sparkles.tsx` — ambient background animation for Hero, replacing the old techy purple neuron-network canvas (`neural-canvas.tsx`, still unused/untouched) with something thematically consistent: 20 small teal/peach/gold dots + sparkle-shapes drifting slowly with staggered fade in/out, colors pulled from CSS vars. Wired into Hero via `<FloatingSparkles />` behind content (z-0).
  - **Tried and rejected**: a walking cow + grass-strip SVG animation along the hero bottom (`cow-grass.tsx`) — built as proper line-art SVG (legs walk-cycle, tail swish, head-bob grazing, grass blades, all in `currentColor`/`--primary` so it follows theme) per user's request, but user decided against it after seeing it — **component deleted, not wired in**. Don't recreate unless user asks again.
  - Two dev-server issues hit along the way, both resolved: (1) Turbopack ChunkLoadError from stale cache, (2) image not refreshing after replacing `profile.png` — both fixed via `rm -rf .next && npm run dev` + hard browser refresh (recurring gotcha whenever `profile.png` is swapped).

**Reminder (user instruction, 2026-07-04): do not make any change without asking first and getting explicit go-ahead — one section at a time.** (Standing rule for rest of project, not just Phase 4.)

### Phase 5 — Contact form backend ✅ DONE
- [x] She created her own [resend.com](https://resend.com) account + API key
- [x] Updated local `.env.local` with her `RESEND_API_KEY`
- [x] Updated `to:` recipient email in `src/app/api/contact/route.ts` to hers
- [x] Tested contact form locally — delivered successfully

### Phase 6 — Deploy on her Vercel (browser only, no CLI) ✅ DONE
- [x] Her Vercel dashboard → Add New Project → Import from GitHub → select her repo
- [x] Add environment variables in Vercel (Settings → Environment Variables) — match `.env.local`
- [x] Deploy
- [x] Verify live site loads, contact form works end-to-end
- [x] Renamed Vercel project → custom `.vercel.app` URL: `sadakakarla.vercel.app`

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
