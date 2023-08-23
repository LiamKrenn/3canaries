<script lang="ts">
	import { getTimesPerMonth } from '$lib/PocketBase';
	import type { Times } from '$lib/Types';
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import CalendarElement from './CalendarElement.svelte';

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
	const enabledStyle: string = 'cursor-pointer card-hover bg-surface-200 dark:bg-surface-600 stroke-black flex-shrink-0';


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
			year: '2-digit'
		};
		monthYear = month.toLocaleDateString('de-DE', options);
		maxlim = month.getFullYear() == maxyear && month.getMonth() == maxmonth;
		minlim = month.getFullYear() == min.getFullYear() && month.getMonth() == min.getMonth();
		times = await getTimesPerMonth(month);
	}

</script>

<h4 class="w-full mt-4 flex justify-center text-surface-900-50-token h4 italic text-center">
		- We're open, when we're open! -
	</h4>


<div class="flex items-center justify-center mx-2 py-8 ">
	<button
		on:click={decreaseMonth}
		class="card w-10 h-10 flex justify-center items-center mb-1.5 border-surface-800 border {minlim
			? disabledStyle
			: enabledStyle}"
	>
		<ChevronLeft />
	</button>
	<h1
		class="h1 justify-center md:mx-12 sm:mx-6 mx-3 md:w-[26rem] w-[13rem] whitespace-nowrap text-center dark:text-surface-50 cursor-default flex items-baseline"
	>
		{monthYear.slice(0,-3)}
		<p class="border-t-[1px] md:pt-1 md:ml-4 ml-2">
			{monthYear.slice(-2)}
		</p>
	</h1>

	<button
		on:click={increaseMonth}
		class="card w-10 h-10 flex justify-center items-center mb-1.5 border-surface-800 border {maxlim
			? disabledStyle
			: enabledStyle}"
	>
		<ChevronRight />
	</button>
</div>

<div class="w-full overflow-y-auto overflow-x-hidden rounded-xl flex flex-col items-center ">
	{#each times as time (time.id)}
		<CalendarElement {time} />
	{/each}
</div>
