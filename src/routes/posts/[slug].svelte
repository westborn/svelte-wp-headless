<script context="module">
	export const load = async ({ params, fetch }) => {
		console.log('[slug].svelte', params.slug);
		const slug = params.slug;
		const res = await fetch(`/api/posts/${slug}.json`);
		const post = await res.json();
		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import GetImage from '$lib/GetImage.svelte';

	const goSomeWhereBack = () => {
		const backPath = $page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/'));
		goto(backPath);
	};

	export let post;
</script>

<h1 class="text-2xl">{@html post.title.rendered}</h1>
<p class="text-xs">{new Date(post.date)}</p>
<p class="font-semibold">by {post.author}</p>
{#if post.featured_media}
	<GetImage size="thumbnail" imageId={post.featured_media} alt={post.title.rendered} />
{/if}
<p>{@html post.content.rendered}</p>

<button
	class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
	on:click={goSomeWhereBack}>Back</button
>
<!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
