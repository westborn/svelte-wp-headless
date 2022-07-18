<script context="module">
	export const load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`/api/pages/${id}.json`);
		const page = await res.json();
		return {
			props: {
				page
			}
		};
	};
</script>

<script>
	import { goto } from '$app/navigation';

	export let page;
</script>

<h1 class="text-2xl">{@html page.title.rendered}</h1>
<p class="text-xs">{new Date(page.date)}</p>
<p class="font-semibold">by {page.author}</p>
<p>{@html page.content.rendered}</p>

<button
	class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
	on:click={() => goto('/pages')}>Back</button
>
