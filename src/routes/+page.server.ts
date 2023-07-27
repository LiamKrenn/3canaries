import type { Times } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { ListResult } from 'pocketbase';

export const load = (async () => {
	const pb: PocketBase = new PocketBase('http://127.0.0.1:8090');
	const date = new Date().toJSON().slice(0, 10);
	const result: ListResult<Times> = await pb.collection('times').getList<Times>(1, 100, {
		filter: `from >= "${date} 00:00:00"`
	});
	const p: Times[] = structuredClone(result.items);

	return {
		times: p
	};
}) satisfies PageServerLoad;
