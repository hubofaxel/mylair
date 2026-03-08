<svelte:head>
	<title>About — Axel's Lab</title>
	<meta name="description" content="About Axel and his projects." />
</svelte:head>

<section class="mx-auto max-w-(--width-narrow)" aria-labelledby="about-heading">
	<div class="animate-slide-up mb-10">
		<p
			class="mb-3 text-sm font-semibold uppercase tracking-widest text-(--color-primary)"
		>
			About
		</p>
		<h1
			id="about-heading"
			class="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight tracking-tight"
		>
			Hi, I'm Axel<span class="text-(--color-primary)">.</span>
		</h1>
	</div>

	<div class="animate-slide-up delay-1 space-y-5 text-lg leading-relaxed text-(--color-text-muted)">
		<p>And I'm awesome.</p>
		<p>
			This is where I share my projects and experiments — science stuff, coding projects,
			and whatever else I'm into. More coming soon.
		</p>
	</div>

	<div
		class="animate-slide-up delay-2 mt-12 rounded-(--radius-lg) border border-(--color-border) bg-(--color-bg-card) p-6"
	>
		<h2 class="mb-4 font-display text-lg font-bold tracking-tight">Quick Facts</h2>
		<dl class="grid gap-4 sm:grid-cols-2">
			<div>
				<dt class="text-xs font-semibold uppercase tracking-wider text-(--color-text-faint)">Location</dt>
				<dd class="mt-1 font-medium">Homer, Alaska</dd>
			</div>
			<div>
				<dt class="text-xs font-semibold uppercase tracking-wider text-(--color-text-faint)">Interests</dt>
				<dd class="mt-1 font-medium">Science, Coding, Space</dd>
			</div>
			<div>
				<dt class="text-xs font-semibold uppercase tracking-wider text-(--color-text-faint)">Current Focus</dt>
				<dd class="mt-1 font-medium">Building games</dd>
			</div>
			<div>
				<dt class="text-xs font-semibold uppercase tracking-wider text-(--color-text-faint)">Favorite Language</dt>
				<dd class="mt-1 font-medium">TypeScript</dd>
			</div>
		</dl>
	</div>
</section>
