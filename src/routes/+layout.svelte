<script lang="ts">
import '../app.css';
import Footer from '$components/Footer.svelte';
import Header from '$components/Header.svelte';

let { children } = $props();
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Axel's Lab — Science & Code from Alaska" />
	<meta property="og:description" content="Science experiments, coding projects, and big ideas." />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to content</a>

<div class="grain flex min-h-screen flex-col">
	<Header />
	<main
		id="main-content"
		class="mx-auto w-full max-w-(--width-content) flex-1 px-(--spacing-page) py-8 md:py-12"
	>
		{@render children()}
	</main>
	<Footer />
</div>
