<script lang="ts">
import Hero from '$components/Hero.svelte';
import ProjectCard from '$components/ProjectCard.svelte';
import { getFeaturedProjects, getNonFeaturedProjects } from '$data/projects';

const featured = getFeaturedProjects();
const others = getNonFeaturedProjects();
</script>

<svelte:head>
	<title>Axel's Lab — Science & Code from Alaska</title>
	<meta name="description" content="Science experiments, coding projects, and big ideas." />
</svelte:head>

<Hero />

{#if featured.length > 0}
	<section class="animate-slide-up delay-3 mb-(--spacing-section)" aria-labelledby="featured-heading">
		<div class="mb-6 flex items-center gap-3">
			<h2 id="featured-heading" class="font-display text-xl font-bold tracking-tight">Featured</h2>
			<div class="h-px flex-1 bg-(--color-border)"></div>
		</div>
		<div class="space-y-6">
			{#each featured as project (project.slug)}
				<ProjectCard {project} featured />
			{/each}
		</div>
	</section>
{/if}

<section class="animate-slide-up delay-4" aria-labelledby="projects-heading">
	<div class="mb-6 flex items-center gap-3">
		<h2 id="projects-heading" class="font-display text-xl font-bold tracking-tight">All Projects</h2>
		<div class="h-px flex-1 bg-(--color-border)"></div>
		<a
			href="/projects"
			class="text-sm font-medium text-(--color-text-muted) transition-colors hover:text-(--color-primary)"
		>
			View all
		</a>
	</div>
	<div class="grid gap-6 sm:grid-cols-2">
		{#each others as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
