import type { Partner } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { Record } from 'pocketbase';

export const load = (async () => {
	const pb: PocketBase = new PocketBase('http://127.0.0.1:8090');
	const result: Partner[] = await pb.collection('partner').getFullList<Partner>();
	const p: Partner[] = structuredClone(result);

	return {
		partners: p
	};
}) satisfies PageServerLoad;
