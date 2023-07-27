<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
	import type { PageData } from './$types';
	export let data: PageData;

	function shortDate(date: string) {
		let d = new Date(date)
		const options: Intl.DateTimeFormatOptions = {
				weekday: 'short',
				day: 'numeric',
				month: 'long'
		};
		const formattedDate = d.toLocaleDateString('de-DE', options);
		console.log(formattedDate);
		return formattedDate
	}
	
</script>


	
<Carousel/>

<div class="w-full flex justify-center mt-16">
	<h1 class="h1 w-fit">Aktuelle Öffnungszeiten</h1>
	
</div>
<div class="flex w-screen h-fit flex-col items-center mt-4">
	{#each data.times as time}
	<p class="h-fit">{shortDate(time.from)}</p>
	
{/each}
</div>

