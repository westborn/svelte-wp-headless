<script>
	import '../app.css';
	import Nav from '../lib/Nav.svelte';
</script>

<Nav />

<div class="container xl:w-1/2 lg:w-3/4 px-5 py-16 w-full mx-auto">
	<h1 class="text-4xl text-center">Westborn(AU)</h1>

	<slot />
</div>

<!-- <style>
	:global(.more-link) {
		display: none;
		}
</style> -->
