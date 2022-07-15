import { BASE_URL, POSTS_API_URL } from '$lib/variables';

export const get = async (request) => {
	const slug = request.params.slug;
	const url = `${BASE_URL}${POSTS_API_URL}?slug=${slug}`;
	const res = await fetch(url);
	const post = await res.json();
	return {
		status: 200,
		body: post[0]
	};
};
