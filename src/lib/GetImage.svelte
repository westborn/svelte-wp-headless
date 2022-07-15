<script>
	import { onMount } from 'svelte';
	import { BASE_URL } from '$lib/variables';

	export let imageId;
	export let size;
	export let alt;

	const apiUrl = `${BASE_URL}/wp-json/wp/v2/media/${imageId}`;

	let images = [];
	let src = '';

	onMount(async function () {
		if (imageId) {
			const response = await fetch(apiUrl);
			images = await response.json();
			// console.log(images);
			if (
				images &&
				images.media_details &&
				images.media_details.sizes &&
				images.media_details.sizes[size]
			) {
				src = images.media_details.sizes[size].source_url || '';
			}
		}
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
