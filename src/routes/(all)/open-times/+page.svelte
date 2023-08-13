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

<div class="h-full w-full text-surface-900">
	<Calendar {times} {maxmonth} {maxyear} {monthYearText} />
</div>
