<script lang="ts">
import ProjectCard from '$components/ProjectCard.svelte';
import { projects } from '$data/projects';
</script>

<svelte:head>
	<title>Projects — Axel's Lab</title>
	<meta name="description" content="All of Axel's science experiments and coding projects." />
</svelte:head>

<section aria-labelledby="all-projects-heading">
	<div class="animate-slide-up mb-10">
		<p
			class="mb-3 text-sm font-semibold uppercase tracking-widest text-(--color-primary)"
		>
			Projects
		</p>
		<h1
			id="all-projects-heading"
			class="mb-2 font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight tracking-tight"
		>
			All Projects
		</h1>
		<p class="max-w-lg text-(--color-text-muted)">
			Everything I'm working on or have finished — science and code.
		</p>
	</div>

	<div class="animate-slide-up delay-1 grid gap-6 sm:grid-cols-2">
		{#each projects as project, i (project.slug)}
			<div style="animation-delay: {150 + i * 80}ms" class="animate-slide-up">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</section>
