<script lang="ts">
	import { getTimesPerMonth } from '$lib/PocketBase';
	import type { Times } from '$lib/Types';
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';

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
	const disabledStyle: string = 'cursor-not-allowed variant-filled-surface';
	const enabledStyle: string = 'cursor-pointer card-hover';

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
</script>

<div class="mb-10 mx-8 my-4 w-[35rem]">
	<div class="flex items-center justify-between">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={decreaseMonth}
			class="card w-10 h-10 flex justify-center items-center mb-1.5 {minlim
				? disabledStyle
				: enabledStyle}"
		>
			<ChevronLeft />
		</div>
		<h1 class="h1 mx-4 select-none">{monthYear}</h1>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={increaseMonth}
			class="card w-10 h-10 flex justify-center items-center mb-1.5 {maxlim
				? disabledStyle
				: enabledStyle}"
		>
			<ChevronRight />
		</div>
	</div>
	<div class="flex" />
</div>

{#each times as time}
	<p>{time.from}</p>
{/each}
