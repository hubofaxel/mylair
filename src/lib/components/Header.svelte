<script lang="ts">
import { base } from '$app/paths';
import { page } from '$app/state';

const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'About' },
] as const;

let menuOpen = $state(false);

function isActive(href: string): boolean {
	const path = page.url.pathname;
	const full = base + href;
	if (href === '/') return path === base || path === base + '/';
	return path.startsWith(full);
}

function closeMenu() {
	menuOpen = false;
}
</script>

<header
	class="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/80 backdrop-blur-xl"
>
	<div
		class="mx-auto flex max-w-(--width-content) items-center justify-between px-(--spacing-page) py-3"
	>
		<!-- Logo -->
		<a
			href="{base}/"
			class="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-(--color-text) transition-colors hover:text-(--color-primary)"
			onclick={closeMenu}
		>
			<svg
				width="30"
				height="30"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				class="transition-transform duration-500 ease-(--ease-out-expo) group-hover:rotate-90"
			>
				<circle cx="12" cy="12" r="3" fill="var(--color-primary)" />
				<ellipse
					cx="12"
					cy="12"
					rx="10"
					ry="4"
					stroke="var(--color-primary)"
					stroke-width="1.5"
					fill="none"
					opacity="0.7"
				/>
				<ellipse
					cx="12"
					cy="12"
					rx="10"
					ry="4"
					stroke="var(--color-secondary)"
					stroke-width="1.5"
					fill="none"
					transform="rotate(60 12 12)"
					opacity="0.7"
				/>
				<ellipse
					cx="12"
					cy="12"
					rx="10"
					ry="4"
					stroke="var(--color-accent)"
					stroke-width="1.5"
					fill="none"
					transform="rotate(120 12 12)"
					opacity="0.7"
				/>
			</svg>
			<span>Axel's Lab</span>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
			{#each nav as { href, label }}
				<a
					href="{base}{href}"
					class="relative rounded-(--radius-sm) px-3.5 py-2 text-sm font-medium transition-colors
						{isActive(href)
						? 'text-(--color-primary)'
						: 'text-(--color-text-muted) hover:text-(--color-text)'}"
				>
					{label}
					{#if isActive(href)}
						<span
							class="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-(--color-primary)"
						></span>
					{/if}
				</a>
			{/each}
		</nav>

		<!-- Mobile menu button -->
		<button
			class="relative z-[90] flex h-10 w-10 items-center justify-center rounded-(--radius-sm) text-(--color-text-muted) transition-colors hover:text-(--color-text) sm:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
		>
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
				{#if menuOpen}
					<line x1="6" y1="6" x2="18" y2="18" />
					<line x1="18" y1="6" x2="6" y2="18" />
				{:else}
					<line x1="4" y1="7" x2="20" y2="7" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="17" x2="20" y2="17" />
				{/if}
			</svg>
		</button>
	</div>
</header>

<!-- Mobile nav — outside header to avoid inheriting its transparency/backdrop -->
{#if menuOpen}
	<div
		class="fixed inset-0 z-[80] bg-(--color-bg)/95 sm:hidden"
		role="presentation"
	>
		<button
			class="absolute inset-0 h-full w-full cursor-default"
			onclick={closeMenu}
			aria-label="Close menu"
			tabindex="-1"
		></button>
	</div>
	<nav
		class="fixed inset-0 z-[85] flex flex-col items-center justify-center gap-4 sm:hidden"
		aria-label="Mobile navigation"
	>
		{#each nav as { href, label }, i}
			<a
				href="{base}{href}"
				onclick={closeMenu}
				class="animate-slide-up rounded-(--radius-md) px-8 py-4 text-2xl font-bold font-display tracking-tight transition-colors
					{isActive(href)
					? 'text-(--color-primary)'
					: 'text-(--color-text) hover:text-(--color-primary)'}"
				style="animation-delay: {i * 80}ms"
			>
				{label}
			</a>
		{/each}
	</nav>
{/if}
