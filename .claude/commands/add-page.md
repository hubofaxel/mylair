Add a new page or section to the portfolio site.

Arguments: $ARGUMENTS (page name and description)

1. Read `src/routes/+layout.svelte` to understand the layout structure
2. Read `src/lib/components/Header.svelte` to understand navigation
3. Read `src/app.css` to understand the design token system
4. Create the new route in `src/routes/<page>/+page.svelte` following established patterns:
   - Import `{ base }` from `$app/paths` if the page has internal links
   - Svelte 5 runes for any reactive state
   - Tailwind 4 utility classes using existing design tokens
   - Semantic HTML (proper headings, ARIA, accessible markup)
   - Mobile-first responsive design
   - `<svelte:head>` with title and meta description
5. Add navigation link in `src/lib/components/Header.svelte` nav array
6. Run `pnpm lint:fix` to format
7. Verify with `pnpm check` and `pnpm dev`
