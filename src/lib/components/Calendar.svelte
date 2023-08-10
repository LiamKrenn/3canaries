<script lang="ts">
	import { getTimesPerMonth } from '$lib/PocketBase';
	import type { Times } from '$lib/Types';
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import Info from '$lib/icons/info.svelte';
	import CalendarElement from './CalendarElement.svelte';
	import { onMount } from 'svelte';

	export let times: Times[];
	export let maxmonth: number;
	export let maxyear: number;
	export let monthYearText: string;

	const min: Date = new Date();
	let month: Date = new Date();
	let monthYear: string = monthYearText;
	month.setDate(1);
	let minlim: boolean = true;
	let maxlim: boolean = min.getFullYear() == maxyear && min.getMonth() == maxmonth;
	const disabledStyle: string = 'invisible';
	const enabledStyle: string = 'cursor-pointer card-hover bg-surface-200 dark:bg-surface-600';
	let show_info: boolean = false;

	function increaseMonth() {
		if (maxlim) return;
		if (month.getMonth() == 11) month.setFullYear(month.getFullYear() + 1);
		month.setMonth((month.getMonth() + 1) % 12);
		update();
	}

	function decreaseMonth() {
		if (minlim) return;
		if (month.getMonth() == 0) month.setFullYear(month.getFullYear() - 1);
		month.setMonth((month.getMonth() + 11) % 12);
		update();
	}

	async function update() {
		const options: Intl.DateTimeFormatOptions = {
			month: 'long',
			year: 'numeric'
		};
		monthYear = month.toLocaleDateString('de-DE', options);
		maxlim = month.getFullYear() == maxyear && month.getMonth() == maxmonth;
		minlim = month.getFullYear() == min.getFullYear() && month.getMonth() == min.getMonth();
		times = await getTimesPerMonth(month);
	}

	function closeInfo() {
		show_info = false;
	}
</script>

{#if show_info}
	<div class="w-full bg-primary-500 p-2 flex items-center justify-between">
		<p class="cursor-default md:text-base text-sm first-letter:ml-7 relative">
			<span class="h-6 w-6 absolute md:scale-100 scale-75 md:mt-0 -mt-0.5"><Info /></span><span
				class="italic font-bold">We're open, when we're open</span
			>. Zeiten könnten sich ändern! <a class="underline cursor-pointer">Folge uns für Updates!</a>
		</p>
		<button
			on:click={closeInfo}
			class="sm:flex hidden w-min 2xl:w-52 btn bg-surface-50-900-token dark:text-surface-50 h-8 hover:scale-105 duration-150 md:text-base text-sm"
			>Verstanden!</button
		>
		<button on:click={closeInfo} class="sm:hidden h-full -mr-4 w-min flex items-center scale-50">
			<CloseIcon />
		</button>
	</div>
{/if}

<div class="flex items-center justify-center mx-2 py-8">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={decreaseMonth}
		class="card w-10 h-10 flex justify-center items-center mb-1.5 border-surface-800 border {minlim
			? disabledStyle
			: enabledStyle}"
	>
		<ChevronLeft />
	</div>
	<h1
		class="h1 mx-12 w-[26rem] whitespace-nowrap text-center dark:text-surface-50 relative cursor-default"
	>
		{monthYear}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#if !show_info}
			<button
				on:click={() => {
					show_info = true;
				}}
				class="h-6 w-6 ml-2 absolute hover:scale-105 duration-150"><Info /></button
			>
		{/if}
	</h1>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={increaseMonth}
		class="card w-10 h-10 flex justify-center items-center mb-1.5 border-surface-800 border {maxlim
			? disabledStyle
			: enabledStyle}"
	>
		<ChevronRight />
	</div>
</div>

<div class="w-full overflow-y-auto overflow-x-hidden rounded-xl flex flex-col items-center">
	{#each times as time (time.id)}
		<CalendarElement {time} />
	{/each}
</div>
