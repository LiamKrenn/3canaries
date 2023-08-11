import { domain } from '$lib/PocketBase';
import type { Partner } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { Record } from 'pocketbase';

export const load = (async () => {
	const pb: PocketBase = new PocketBase(`http://${domain}`);
	const result: Partner[] = await pb.collection('partner').getFullList<Partner>();
	const p: Partner[] = structuredClone(result);

	return {
		partners: p
	};
}) satisfies PageServerLoad;
