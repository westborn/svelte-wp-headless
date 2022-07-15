<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json');
		const posts = await res.json();

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import GetImage from '$lib/GetImage.svelte';
	export let posts;
</script>

<div class="container mx-auto">
	<h2 class="text-4xl text-center">Westborn(AU) Blog</h2>

	{#each posts as post}
		<h2 class="text-3xl mt-4">{@html post.title.rendered}</h2>
		{#if post.featured_media}
			<GetImage size="thumbnail" imageId={post.featured_media} alt={post.title.rendered} />
		{/if}
		<p>{@html post.excerpt.rendered}</p>
		<a
			class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
			href={`/posts/${post.slug}`}>Read More</a
		>
		<div class="py-4">
			<div class="w-full border-t border-gray-300" />
		</div>
		<!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
	{/each}
</div>
