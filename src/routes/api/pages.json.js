import { BASE_URL, PAGE_SEARCH_API_URL } from '$lib/variables';

export const get = async (request) => {
	const url = `${BASE_URL}${PAGE_SEARCH_API_URL}`;
	const res = await fetch(url);
	const totalPages = res.headers.get('X-WP-TotalPages');
	const pages = await res.json();
	const body = { pages, totalPages };
	return {
		status: 200,
		body
	};
};
