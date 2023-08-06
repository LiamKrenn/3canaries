import PocketBase, { ListResult } from 'pocketbase';
import type { Times } from '$lib/Types';

const pb: PocketBase = new PocketBase('http://127.0.0.1:8090');

export async function getTimesPerMonth(d: Date): Promise<Times[]> {
	const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 1).toJSON().slice(0, 10);
	const monthStart = new Date(d.getFullYear(), d.getMonth(), 2).toJSON().slice(0, 10);
  
	const result: ListResult<Times> = await pb.collection('times').getList<Times>(1, 999999, {
		filter: `from >= "${monthStart} 00:00:00" && from <= "${monthEnd} 00:00:00"`,
		sort: 'from'
	});
	return structuredClone(result.items);
}
