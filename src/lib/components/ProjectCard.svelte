<script lang="ts">
import { categories, type Project, statusLabels } from '$data/projects';

interface Props {
	project: Project;
	featured?: boolean;
}

let { project, featured = false }: Props = $props();

const cat = $derived(categories[project.category]);
const statusText = $derived(statusLabels[project.status]);
</script>

<article
	class="group relative overflow-hidden rounded-(--radius-lg) border transition-all duration-300 ease-(--ease-out-expo)
		{featured
		? 'border-(--color-primary)/15 hover:border-(--color-primary)/30'
		: 'border-(--color-border) hover:border-(--color-border-hover)'}
		bg-(--color-bg-card) hover:bg-(--color-bg-card-hover) hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
>
	<!-- Hover glow effect -->
	<div
		class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100
			{featured ? 'bg-(--color-primary)/10' : 'bg-(--color-secondary)/8'}"
		aria-hidden="true"
	></div>

	{#if featured && project.banner}
		<div class="banner-scene relative aspect-[2/1] w-full overflow-hidden">
			<img
				src={project.banner}
				alt="{project.title} screenshot"
				loading="lazy"
				class="relative z-[1] h-full w-full scale-[1.35] object-contain object-center transition-transform duration-500 ease-(--ease-out-expo) [image-rendering:pixelated] group-hover:scale-[1.4]"
			/>
			<div class="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-bg-card)_100%)]"></div>
		</div>
	{/if}

	<div class="relative p-6">
		<div class="mb-3 flex items-start gap-3">
			{#if project.icon}
				<img
					src={project.icon}
					alt=""
					class="shrink-0 rounded-(--radius-md) [image-rendering:pixelated]
						{featured ? 'h-14 w-14' : 'h-12 w-12'}"
					loading="lazy"
				/>
			{:else if project.iconEmoji}
				<span
					class="flex shrink-0 items-center justify-center rounded-(--radius-md) bg-white/5 text-3xl leading-none
						{featured ? 'h-14 w-14' : 'h-12 w-12'}"
					aria-hidden="true"
				>
					{project.iconEmoji}
				</span>
			{/if}

			<div class="min-w-0 flex-1">
				<h3 class="font-display text-lg font-bold tracking-tight">{project.title}</h3>
				<div class="mt-1.5 flex flex-wrap gap-1.5">
					<span
						class="inline-block rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider"
						style="color: {cat.color}; background: color-mix(in srgb, {cat.color} 12%, transparent)"
					>
						{cat.label}
					</span>
					<span
						class="inline-block rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider
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
		</div>

		<p class="mb-4 text-[0.925rem] leading-relaxed text-(--color-text-muted)">
			{featured ? project.description : project.summary}
		</p>

		{#if project.tech.length > 0}
			<div class="mb-4 flex flex-wrap gap-1.5">
				{#each project.tech as tech}
					<span
						class="rounded-(--radius-sm) border border-(--color-border) bg-white/[0.03] px-2 py-0.5 text-xs font-medium text-(--color-text-faint)"
					>
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		{#if featured && project.highlights.length > 0}
			<ul class="mb-4 space-y-1.5 pl-5 text-sm text-(--color-text-muted)">
				{#each project.highlights as highlight}
					<li class="relative pl-1 before:absolute before:-left-4 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-(--color-primary)/50">
						{highlight}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="mt-5 flex flex-wrap gap-3">
			<a
				href="/projects/{project.slug}"
				class="inline-flex items-center gap-1.5 rounded-(--radius-md) bg-white/6 px-4 py-2 text-sm font-semibold text-(--color-text) transition-colors hover:bg-white/12"
			>
				Details
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="transition-transform duration-200 group-hover:translate-x-0.5">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
			{#if project.link}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center rounded-(--radius-md) bg-(--color-primary) px-4 py-2 text-sm font-bold text-(--color-bg) transition-all hover:brightness-110 hover:shadow-[0_0_16px_rgba(34,211,167,0.25)]"
				>
					Play Game
				</a>
			{:else if project.status === 'in-progress'}
				<span
					class="inline-flex items-center rounded-(--radius-md) border border-(--color-border) px-4 py-2 text-sm font-semibold text-(--color-text-faint)"
				>
					Coming Soon
				</span>
			{/if}
		</div>
	</div>
</article>
