# mylair

Axel's Lab — personal portfolio site. SvelteKit + Svelte 5 + Tailwind 4 + TypeScript, statically generated.

**Live**: https://hubofaxel.github.io/mylair/

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — static build to dist/
- `pnpm preview` — preview production build
- `pnpm check` — TypeScript + Svelte type checking
- `pnpm format` — Biome format all files
- `pnpm lint` — Biome check (lint + format)
- `pnpm lint:fix` — Biome check with auto-fix
- `pnpm validate` — lint + typecheck + build (full pre-push check)

## Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit + Svelte 5 |
| Styling | Tailwind CSS 4 (via @tailwindcss/vite) |
| Language | TypeScript (strict) |
| Output | Static site (adapter-static) |
| Formatter/Linter | Biome 2.4 (NOT Prettier, NOT ESLint) |
| Package manager | pnpm |
| Deployment | GitHub Pages via Actions |

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`:
1. pnpm install + `BASE_PATH=/mylair pnpm build`
2. Upload dist/ as GitHub Pages artifact
3. Deploy to https://hubofaxel.github.io/mylair/

**Base path**: The site runs at `/mylair/` subpath. `svelte.config.js` reads `BASE_PATH` env var.
- All internal links must use `{base}` from `$app/paths` (e.g., `href="{base}/projects"`)
- All image `src` from data must use `{base}` prefix (e.g., `src="{base}{project.icon}"`)
- Local dev has no base path — `BASE_PATH` is only set in the CI workflow

## Rules

- Investigate before implementing: read first, code second
- Never `--no-verify`
- Commits: `type(scope): description` — scopes: ui, content, deploy, repo
- Biome for formatting/linting — tabs, single quotes, 100 char width
- Svelte 5 runes only — `$props()`, `$state()`, `$derived()`, `$effect()`
- Tailwind 4 utility classes — use `@theme` in app.css for design tokens, no tailwind.config
- All data typed — interfaces in `src/lib/data/`, no `any`
- All HTML must pass basic a11y checks (alt text, semantic elements, ARIA where needed)
- Mobile-first responsive design
- `prerender = true` on all routes (static output)

## Project Structure

```
mylair/
├── src/
│   ├── app.html          # Root HTML template
│   ├── app.css           # Tailwind entry + @theme design tokens
│   ├── app.d.ts          # TypeScript app types
│   ├── lib/
│   │   ├── components/   # Svelte 5 components ($components alias)
│   │   └── data/         # Typed data modules ($data alias)
│   └── routes/
│       ├── +layout.svelte    # Root layout (header, footer)
│       ├── +layout.ts        # prerender = true
│       ├── +page.svelte      # Home page
│       ├── projects/         # Projects list + [slug] detail
│       └── about/            # About page
├── static/               # Static assets (images, SVGs, .nojekyll)
├── .claude/              # Claude Code config (settings, hooks, agents)
├── .github/workflows/    # GitHub Pages deploy workflow
└── dist/                 # Build output (gitignored)
```
