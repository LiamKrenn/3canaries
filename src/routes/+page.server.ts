import { domain } from '$lib/PocketBase';
import type { Times } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { ListResult } from 'pocketbase';

export const load = (async () => {
	const pb: PocketBase = new PocketBase(`http://${domain}`);
	const date = new Date().toJSON().slice(0, 10);
	const result: ListResult<Times> = await pb.collection('times').getList<Times>(1, 3, {
		filter: `from >= "${date} 00:00:00"`,
		sort: 'from'
	});
	const p: Times[] = structuredClone(result.items);

	return {
		times: p
	};
}) satisfies PageServerLoad;
