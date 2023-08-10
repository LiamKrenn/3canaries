import PocketBase, { ListResult } from 'pocketbase';
import type { News, Times } from '$lib/Types';

const localdev: boolean = false;
export const domain: string = localdev ? '127.0.0.1:8090' : '128.140.36.53:3334';
export const url: string = `http://${domain}/api/files`;
export const newsPageCount: number = 6;
const pb: PocketBase = new PocketBase(`http://${domain}`);

export async function getTimesPerMonth(d: Date): Promise<Times[]> {
	const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 1).toJSON().slice(0, 10);
	const monthStart = new Date(d.getFullYear(), d.getMonth(), 2).toJSON().slice(0, 10);
	const result: ListResult<Times> = await pb.collection('times').getList<Times>(1, 999999, {
		filter: `from >= "${monthStart} 00:00:00" && from <= "${monthEnd} 00:00:00"`,
		sort: 'from'
	});
	return structuredClone(result.items);
}

export async function getNews(page: number): Promise<News[]> {
	const result: News[] = (await pb.collection('news').getList<News>(page, newsPageCount, { sort: '-display_date' })).items;
	return structuredClone(result);
}
