<script lang="ts">
import { base } from '$app/paths';
import { categories, statusLabels } from '$data/projects';

let { data } = $props();
const project = $derived(data.project);
const cat = $derived(categories[project.category]);
const statusText = $derived(statusLabels[project.status]);
</script>

<svelte:head>
	<title>{project.title} — Axel's Lab</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<article class="mx-auto max-w-(--width-narrow)">
	<a
		href="{base}/projects"
		class="animate-fade-in group mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-text-muted) transition-colors hover:text-(--color-primary)"
	>
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="transition-transform duration-200 group-hover:-translate-x-0.5">
			<path d="M19 12H5M12 19l-7-7 7-7" />
		</svg>
		All Projects
	</a>

	{#if project.banner}
		<div
			class="banner-scene animate-scale-in relative mb-10 overflow-hidden rounded-(--radius-xl) border border-(--color-border)"
		>
			<div class="aspect-[2/1] w-full overflow-hidden">
				<img
					src="{base}{project.banner}"
					alt="{project.title} screenshot"
					class="relative z-[1] h-full w-full scale-[1.35] object-contain object-center [image-rendering:pixelated]"
					loading="lazy"
				/>
			</div>
			<div class="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-bg)_100%)]"></div>
		</div>
	{/if}

	<div class="animate-slide-up delay-1 mb-10">
		<h1 class="mb-4 font-display text-[clamp(2rem,5vw,2.75rem)] font-extrabold leading-tight tracking-tight">
			{project.title}
		</h1>
		<div class="flex flex-wrap gap-2">
			<span
				class="inline-block rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider"
				style="color: {cat.color}; background: color-mix(in srgb, {cat.color} 12%, transparent)"
			>
				{cat.label}
			</span>
			<span
				class="inline-block rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider
					{project.status === 'in-progress'
					? 'text-(--color-accent-blue) bg-(--color-accent-blue)/10'
					: project.status === 'complete'
						? 'text-(--color-accent-green) bg-(--color-accent-green)/10'
						: 'text-(--color-text-muted) bg-white/5'}"
			>
				{statusText}
			</span>
		</div>
	</div>

	<p class="animate-slide-up delay-2 mb-10 text-lg leading-relaxed text-(--color-text-muted)">
		{project.description}
	</p>

	{#if project.tech.length > 0}
		<div class="animate-slide-up delay-3 mb-10">
			<h2 class="mb-4 font-display text-lg font-bold tracking-tight">Tech Stack</h2>
			<div class="flex flex-wrap gap-2">
				{#each project.tech as tech}
					<span
						class="rounded-(--radius-sm) border border-(--color-border) bg-white/[0.03] px-3 py-1 text-sm font-medium text-(--color-text-muted)"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>
	{/if}

	{#if project.highlights.length > 0}
		<div class="animate-slide-up delay-4 mb-10">
			<h2 class="mb-4 font-display text-lg font-bold tracking-tight">Highlights</h2>
			<ul class="space-y-2.5 pl-5 text-(--color-text-muted)">
				{#each project.highlights as highlight}
					<li class="relative pl-1 before:absolute before:-left-4 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--color-primary)/50">
						{highlight}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="animate-slide-up delay-5 mt-12">
		{#if project.link}
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-(--radius-md) bg-(--color-primary) px-6 py-3 font-bold text-(--color-bg) transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(34,211,167,0.3)]"
			>
				Play Game
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M7 17L17 7M17 7H7M17 7v10" />
				</svg>
			</a>
		{:else if project.status === 'in-progress'}
			<span
				class="inline-flex items-center rounded-(--radius-md) border border-(--color-border) px-6 py-3 font-semibold text-(--color-text-faint)"
			>
				Coming Soon
			</span>
		{/if}
	</div>
</article>
