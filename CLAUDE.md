# mylair

Axel's Lab — personal portfolio site. SvelteKit + Svelte 5 + Tailwind 4 + TypeScript, statically generated.

## Commands

- `pnpm dev` — SvelteKit dev server
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
| Deployment | GitHub Actions to /var/www/kidsites/axel |

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
│   ├── app.css           # Tailwind entry + design tokens
│   ├── app.d.ts          # TypeScript app types
│   ├── lib/
│   │   ├── components/   # Svelte 5 components
│   │   └── data/         # Typed data (projects, etc.)
│   └── routes/
│       ├── +layout.svelte    # Root layout (header, footer)
│       ├── +page.svelte      # Home page
│       ├── projects/         # Projects list + [slug] detail
│       └── about/            # About page
├── static/               # Static assets (images, SVGs) — served from /
├── .claude/              # Claude Code config (settings, hooks, agents)
└── dist/                 # Build output (gitignored)
```

## Deployment

Push to `main` triggers GitHub Actions workflow:
1. pnpm install + pnpm build
2. Deploy dist/ to remote server via kids-deploy-actions
