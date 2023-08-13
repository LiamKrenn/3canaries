<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import Carousel2 from '$lib/components/Carousel2.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	function shortDate(date: string) {
		let d = new Date(date);
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'short',
			day: 'numeric',
			month: 'long'
		};
		const formattedDate = d.toLocaleDateString('de-DE', options);
		return formattedDate;
	}
</script>

<svelte:head>
	<title>3Canaries | Home</title>
	<meta name="description" content='more than a vinyl shop. Es ist nicht nur ein "Geschäft" - es ist ein Lebensgefühl. Ein Ort, bei dem Zeit keine Rolle spielt. Ein Ort der Leidenschaft & Hingabe zur Kunst Musik. "More than an Vinyl Shop" eben. Aus purer Überzeugung.. Schau vorbei und genieße Platten, Musik, interessante Gespräche und eine chillige Atmosphäre.' />
</svelte:head>

<Carousel />

<div
	class="w-full flex flex-col justify-center text-center items-center pt-6 pb-4 bg-primary-400 dark:bg-primary-600 select-none"
>
	<h1 class="h2 w-fit dark:text-black">Aktuelle Öffnungszeiten</h1>
	<div class="flex flex-col items-start ">
		{#each data.times as time}
			<p class=" dark:text-black text-2xl mt-4 whitespace-nowrap">{shortDate(time.from)}</p>
			<p class="text-2xl dark:text-black font-thin">{time.event}</p>
		{/each}
	</div>
	<a
		href="/open-times"
		class="text-xl pb-4 px-4 pt-4 mt-2 underline flex items-center cursor-pointer dark:text-black stroke-black"
		>Alle Öffnungszeiten<ChevronRight /></a
	>
</div>
<div class="w-full pt-16 pb-12 justify-center text-center cursor-default">
	<h1 class="h1 font-bold mb-6">Three Canaries Records.</h1>
	<h1 class="h1 italic">- more than a vinyl shop -</h1>
</div>


<div class="w-full flex lg:flex-row flex-col lg:flex-wrap py-2 justify-center lg:items-start items-center cursor-default mb-8">
	<div class="card lg:w-[40vw] w-[90%] h-max-[30rem] mx-4 my-2 rounded-lg variant-filled-secondary">
		<header>
			<img class="w-full rounded-lg shrink-0 " src="images/meinladen.webp" />
		</header>
		<div class="md:p-6 p-4">
			<h3 class="h3 mb-2">Mein Laden.</h3>
			<p class="whitespace-break-spaces">
				Mein Plattenladen in Graz (Steiermark) ist nicht nur "Geschäft" - es ist Lebensgefühl. Ein Ort, bei dem Zeit keine Rolle spielt. Ein Ort der Leidenschaft & Hingabe zur Kunst Musik. "More than an Vinyl Shop" eben. Aus purer Überzeugung...
			</p>
		</div>
	</div>


	<div class="card lg:w-[40vw] w-[90%] mx-4 my-2 rounded-lg variant-filled-secondary">
		<header>
			<img class="w-full rounded-lg shrink-0" src="images/meinplatten.webp" />
		</header>
		<div class="md:p-6 p-4">
			<h3 class="h3 mb-2">Meine Platten.</h3>
			<p class="whitespace-break-spaces">
				Im Laufe der Zeit sammelten sich die Werke. Ohne Druck, ohne Stress. Die nunmehr exklusive Vinyl-Kollektion beinhaltet seltenste Ausgaben und echte Schmuckstücke. Wenn es nach meinem Geschmack geht, versteht sich. Vielleicht findest du hier genau deine Platte...
			</p>
		</div>
	</div>
</div>


<Carousel2/>