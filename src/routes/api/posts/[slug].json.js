import { BASE_URL, POSTS_API_URL } from '$lib/variables';

export const get = async (request) => {
	const slug = request.params.slug;
	const url = `${BASE_URL}${POSTS_API_URL}?slug=${slug}&_embed`;
	const res = await fetch(url);
	const posts = await res.json();
	const post = posts[0];
	post.image = post._embedded['wp:featuredmedia'][0].source_url;
	post.author = post._embedded.author[0].name;

	return {
		status: 200,
		body: post
	};
};
