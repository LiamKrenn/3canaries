import type { News } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { Record } from 'pocketbase';

export const load = (async () => {
	const pb: PocketBase = new PocketBase('http://127.0.0.1:8090');
	const result: News[] = (await pb.collection('news').getList<News>(1, 3, { sort: '-display_date' })).items;
	
	return {
		news: structuredClone(result)
	};
}) satisfies PageServerLoad;
