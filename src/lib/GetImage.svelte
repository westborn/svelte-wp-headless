<script>
	import { onMount } from 'svelte';
	import { BASE_URL, MEDIA_API_URL } from '$lib/variables';

	export let imageId;
	export let size;
	export let alt;

	const apiUrl = `${BASE_URL}${MEDIA_API_URL}${imageId}`;

	let images = [];
	let src;

	$: onMount(async () => {
		const res = await fetch(apiUrl);
		const data = await res.json();
		images = data.media_details.sizes;
		src = images[size].source_url;
	});
</script>

{#if src}
	<img {src} {alt} class="img-fluid" />
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 150 150"
		class="img-fluid"
		width="150"
		height="150"
	>
		<rect width="150" height="150" fill="#cccccc" />
		<text
			x="50%"
			y="50%"
			dominant-baseline="middle"
			text-anchor="middle"
			font-family="monospace"
			font-size="26px"
			fill="#333333">Loading</text
		>
	</svg>
{/if}
