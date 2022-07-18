<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/pages.json');
		const body = await res.json();
		const pages = body.pages;
		const totalPages = body.totalPages;

		return {
			props: {
				pages,
				totalPages
			}
		};
	};
</script>

<script>
	export let pages;
	export let totalPages;
</script>

<div class="container mx-auto">
	<h2 class="text-4xl text-center">Westborn(AU) Blog ({totalPages} Pages)</h2>

	{#each pages as page}
		<h2 class="text-3xl mt-4">{page.title}</h2>
		<p>{page.url}</p>
		<a
			class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
			href={`/pages/${page.id}`}>Read More</a
		>
		<div class="py-4">
			<div class="w-full border-t border-gray-300" />
		</div>
		<!-- <pre>{JSON.stringify(page, null, 2)}</pre> -->
	{/each}
</div>
