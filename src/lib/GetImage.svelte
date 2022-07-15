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
	<img
		src={`https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder_${alt}`}
		{alt}
		class="img-fluid"
	/>
{/if}
