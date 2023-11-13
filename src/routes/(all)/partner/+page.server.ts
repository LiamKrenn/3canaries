import { domain } from '$lib/PocketBase';
import type { Partner } from '$lib/Types';
import type { PageServerLoad } from './$types';
import PocketBase, { Record } from 'pocketbase';

import { FETCH_BYPASS_KEY } from '$env/static/private';

export const config = {
  isr: {
    expiration: 86400,
    bypassToken: FETCH_BYPASS_KEY,
  },
};

export const load = (async () => {
	const pb: PocketBase = new PocketBase(`https://${domain}`);
	const result: Partner[] = await pb.collection('partner').getFullList<Partner>();
	const p: Partner[] = structuredClone(result);

	return {
		partners: p
	};
}) satisfies PageServerLoad;
