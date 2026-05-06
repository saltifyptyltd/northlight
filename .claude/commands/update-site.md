You are helping update the Northlight Consulting website. Follow everything below before touching any code.

## Design system — do not deviate

**Palette (dark default):**
- Background: `#0a0a0a` / alt `#111111` / card `#161616`
- Text: `#f2f2f2` / muted `#888888` / dim `#444444`
- Accent (Nvidia green): `#76b900` / hover `#8fd400`
- Border: `#222222`

**Light mode overrides** live in `[data-theme="light"]` in `css/style.css`.
Philosophy section (`#050505`) is always dark regardless of theme — intentional.

**Typography:** Inter via Google Fonts. Headlines: `font-weight: 700`, `letter-spacing: -0.025em`. Hero title uses `clamp()`.

**Animations:** `gridDrift` on hero background, `shimmer` on hero highlight, `borderPulse` on featured card, `fadeInUp` on hero elements, `.fade-in` + `.visible` for scroll reveals via IntersectionObserver.

**Card pattern:** 1px gap grid (`background: var(--color-border)`) with `border-radius: var(--radius)` and `overflow: hidden`. Cards hover: green top bar (`::after scaleX`), dark bg shift.

## Architecture

- `index.html` — entire page, single file
- `css/style.css` — all styles, CSS custom properties at `:root`
- `js/script.js` — `initTheme`, `initNavigation`, `initAnimations`, `initHNFeed`. Add new behaviour as a new `init*()` function called from `DOMContentLoaded`.
- `_headers` — Cloudflare CSP. If adding a new external fetch target, add it to `connect-src`.
- Deploy: `git push` → Cloudflare Pages auto-deploys to `https://northlight.work`

## Page sections (in order)

1. Nav — logo (two-line: Northlight / CONSULTING PTY LTD), links, theme toggle, hamburger
2. Hero — dark grid animation, gradient headline, eyebrow text
3. Services — AI Uplift featured card (full-width, first), then Config Mgmt / Containers / Infra (3-col)
4. Philosophy — always dark (`#050505`), the Northlight thesis blockquote
5. Process — 3 steps: Assess / Automate / Uplift
6. In the wild — live HN feed via Algolia API (`https://hn.algolia.com/api/v1/search?query=AI+agents+devops&tags=story&hitsPerPage=6`)
7. Contact — email only: `sales@northlight.work`
8. Footer — © 2026 Northlight Consulting Pty Ltd

## Tone

Gen-Z leaning but credible. Direct, confident, no corporate fluff. Contractions are fine. Short sentences. No exclamation marks.

## Workflow for every update

1. `/plan` — agree on changes before writing code
2. Build — edit the minimum files needed
3. `/simplify` — review before committing
4. Commit with a clear message
5. `git push` — Cloudflare deploys automatically

## Content guardrails

- Contact is email only — no form backend, don't add one unless asked
- AI Uplift is the primary service — always feature it first and most prominently
- The philosophy section is always dark — do not apply theme variables to it
- Copyright year: 2026
