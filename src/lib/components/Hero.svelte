<section
	class="relative mb-(--spacing-section) overflow-hidden rounded-(--radius-xl) border border-(--color-border) bg-(--color-bg-raised) px-8 py-16 md:px-12 md:py-24"
	aria-labelledby="hero-heading"
>
	<!-- Content -->
	<div class="relative z-10">
		<p
			class="animate-slide-up mb-4 inline-block rounded-full border border-(--color-primary)/20 bg-(--color-primary-muted) px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-(--color-primary)"
		>
			Explorer &middot; Builder &middot; Scientist
		</p>

		<h1
			id="hero-heading"
			class="animate-slide-up delay-1 mb-4 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight"
		>
			Welcome to
			<span
				class="bg-gradient-to-r from-(--color-primary) via-(--color-accent-blue) to-(--color-secondary) bg-clip-text text-transparent"
			>
				Axel's Lab
			</span>
		</h1>

		<p
			class="animate-slide-up delay-2 max-w-lg text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-(--color-text-muted)"
		>
			Science experiments, coding projects, and big ideas — from Homer, Alaska.
		</p>

		<div class="animate-slide-up delay-3 mt-8 flex flex-wrap gap-3">
			<a
				href="/projects"
				class="inline-flex items-center gap-2 rounded-(--radius-md) bg-(--color-primary) px-5 py-2.5 text-sm font-bold text-(--color-bg) transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(34,211,167,0.3)]"
			>
				View Projects
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
			<a
				href="/about"
				class="inline-flex items-center rounded-(--radius-md) border border-(--color-border) bg-white/5 px-5 py-2.5 text-sm font-semibold text-(--color-text) transition-colors hover:border-(--color-border-hover) hover:bg-white/8"
			>
				About Me
			</a>
		</div>
	</div>

	<!-- Ambient glow particles -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<div
			class="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-(--color-primary) opacity-[0.12] blur-[100px]"
			style="animation: pulse-glow 6s ease-in-out infinite"
		></div>
		<div
			class="absolute -bottom-16 right-[15%] h-56 w-56 rounded-full bg-(--color-secondary) opacity-[0.1] blur-[80px]"
			style="animation: pulse-glow 8s ease-in-out infinite 2s"
		></div>
		<div
			class="absolute top-[30%] -left-12 h-40 w-40 rounded-full bg-(--color-accent) opacity-[0.06] blur-[60px]"
			style="animation: pulse-glow 7s ease-in-out infinite 4s"
		></div>
	</div>

	<!-- Grid pattern -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03]"
		style="background-image: radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 32px 32px;"
		aria-hidden="true"
	></div>
</section>
