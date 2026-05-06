# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Static marketing website for **Northlight Consulting Pty Ltd** — an Australian infrastructure automation and AI uplift consultancy. Live at `https://northlight.work` (Cloudflare Pages, custom domain via `CNAME`).

Core specialisations to reflect in all content and copy:
- Configuration management: **Salt (SaltStack) and Ansible**
- Containers: **Docker and Kubernetes**
- Infrastructure: **Windows and Linux cross-platform**
- Team uplift: **AI tools, vibe coding, AI agents** — helping companies run lean with fewer people

Business thesis (use this in hero/philosophy sections): *New billion-dollar companies won't be built on new product ideas — they'll launch into existing categories but run on a fraction of the headcount using AI.*

## Dev commands

```bash
npm run dev      # Live-reloading local server (live-server on http://localhost:8080)
npm start        # Python HTTP server on http://localhost:8000
npx serve .      # Alternative static server
```

No build step — the repo root is the deployment artifact. There is no `src/` vs `dist/` split.

## Architecture

Single-page site. Three files do all the work:

- `index.html` — entire page structure, all section anchors (`#home`, `#services`, `#about`, `#contact`)
- `css/style.css` — all styling; uses CSS custom properties at `:root` for the design system (colors, spacing, typography)
- `js/script.js` — all interactivity, split into `init*()` functions called from `DOMContentLoaded`

**JS pattern:** each concern is a named init function (`initNavigation`, `initScrollEffects`, `initAnimations`, `initFormHandling`). Add new behaviour by writing a new `init*()` function and calling it from the bottom of the file.

**CSS pattern:** modify the design system by editing `:root` variables first. Avoid hardcoding color or spacing values inline.

## Deployment

Deployed automatically to Cloudflare Pages on push to `main`. No CI/CD pipeline — Cloudflare reads the repo root directly.

- `_headers` — security headers (CSP, X-Frame-Options) and cache rules per path
- `_redirects` — HTTP→HTTPS, www→apex, SPA 404 fallback
- `CNAME` — `northlight.work`

**CSP note:** if adding a new external CDN resource, update the `Content-Security-Policy` in `_headers` or the browser will block it.

## Contact

Contact is email-only: `sales@northlight.work`. There is no form backend. Do not add form submission logic unless explicitly asked.

## Known dead code

- `initDarkMode()` in `script.js` — references `#dark-mode-toggle` which does not exist in the HTML
- `initTypingEffect()` in `script.js` — defined but never called
