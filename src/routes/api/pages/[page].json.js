import { BASE_URL, PAGE_SEARCH_API_URL } from '$lib/variables';

export const get = async (request) => {
	const page = request.params.page;
	console.log(`page: ${page}`);
	const url = `${BASE_URL}${PAGE_SEARCH_API_URL}&page=${page}`;
	const res = await fetch(url);
	const totalPages = res.headers.get('X-WP-TotalPages');
	const pages = await res.json();
	const body = { pages, totalPages };
	console.log(body);
	return {
		status: 200,
		body
	};
};
