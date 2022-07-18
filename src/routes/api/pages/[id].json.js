import { BASE_URL, PAGES_API_URL } from '$lib/variables';

export const get = async (request) => {
	const id = request.params.id;
	const url = `${BASE_URL}${PAGES_API_URL}${id}`;
	const res = await fetch(url);
	const body = await res.json();
	return {
		status: 200,
		body
	};
};
