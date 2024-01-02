<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const times = data.times;
	const maxmonth = data.maxmonth;
	const maxyear = data.maxyear;
	const monthYearText = data.monthYearText;
</script>

<svelte:head>
	<title>3Canaries | Öffnungszeiten</title>
	<meta name="description" content="Nach dem Motto: 'we're open when we're open' haben wir flexible Öffnungszeiten, hier sind alle aktuellen Öffnungszeiten von Three Canaries records." />
</svelte:head>

<h4 class="w-full mt-4 flex justify-center text-surface-900-50-token h4 italic text-center cursor-default select-none">
	- We're open, when we're open! -
</h4>
<div class="h-full w-full text-surface-900">
	<Calendar {times} {maxmonth} {maxyear} {monthYearText} />
</div>
