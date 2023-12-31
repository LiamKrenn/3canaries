import { domain, getTimesPerMonth } from '$lib/PocketBase';
import type { PageServerLoad } from './../$types';
import PocketBase, { ListResult } from 'pocketbase';
import type { Times } from '$lib/Types';

import { FETCH_BYPASS_KEY } from '$env/static/private';

export const config = {
  isr: {
    expiration: 86400,
    bypassToken: FETCH_BYPASS_KEY,
  },
};

export const load = (async () => {
	const pb: PocketBase = new PocketBase(`https://${domain}`);
	const res = getTimesPerMonth(new Date());
	const record = (await pb.collection('times').getList(1,1,{sort: '-from'})).items[0]
	const maxlim: Date = new Date(record.from)
	const maxmonth: number = maxlim.getMonth()
	const maxyear: number = maxlim.getFullYear()
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		year: '2-digit'
	};
	const monthYearText = new Date().toLocaleDateString('de-DE', options);

	return {
		times: res,
		maxmonth: maxmonth,
		maxyear: maxyear,
		monthYearText: monthYearText
	};
}) satisfies PageServerLoad;
