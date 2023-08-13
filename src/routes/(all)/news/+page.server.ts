import { domain, newsPageCount } from '$lib/PocketBase';
import type { News } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { ListResult, Record } from 'pocketbase';

export const load = (async () => {
	const pb: PocketBase = new PocketBase(`https://${domain}`);
	const result: ListResult<News> = await pb.collection('news').getList<News>(1, newsPageCount, { sort: '-display_date' });
	const items: News[] = result.items
	const totalPages: number = result.totalPages
	
	return {
		news: structuredClone(items),
		totalPages: totalPages
	};
}) satisfies PageServerLoad;
