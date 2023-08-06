<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const times = data.times;
	const maxmonth = data.maxmonth;
	const maxyear = data.maxyear;
	const monthYearText = data.monthYearText
</script>

<div class="h-[100%] w-full bg-primary-400 dark:bg-primary-600 text-surface-900 ">
	<Calendar {times} {maxmonth} {maxyear} {monthYearText}/>
</div>
