import { BASE_URL, POSTS_API_URL } from '$lib/variables';

export const get = async () => {
	const res = await fetch(`${BASE_URL}${POSTS_API_URL}?_embed`);
	const posts = await res.json();
	posts.map((post) => {
		post.image = post._embedded['wp:featuredmedia'][0].media_details.file;
		post.imageId = post._embedded['wp:featuredmedia'][0].id;
	});

	return {
		status: 200,
		body: posts
	};
};
