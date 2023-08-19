<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import type { Times } from '$lib/Types';
	import Carousel from '$lib/components/Carousel.svelte';
	import Carousel2 from '$lib/components/Carousel2.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import Info from '$lib/icons/info.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	// @ts-ignore
	import MeinLaden from '$lib/assets/images/meinladenhq.webp?w=200;400;800;1000;1200;1440&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import MeinPlatten from '$lib/assets/images/meinplattenhq.webp?w=200;400;800;1000;1200;1440&format=avif;webp;jpg&as=picture';
	import Picture from '$lib/components/Picture.svelte';
	import Image from '$lib/components/Image.svelte';

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

	function fromToText(time: Times) {
		const from: string = time.from.slice(11, 16);
		const to: string = time.to.slice(11, 16);
		return from + '-' + to;
	}

	let mount = false;
	onMount(() => {
		mount = true;
	});
</script>

<svelte:head>
	<title>3Canaries | Home</title>
	<meta
		name="description"
		content="more than a vinyl shop. Es ist nicht nur ein 'Geschäft' - es ist ein Lebensgefühl. Ein Ort, bei dem Zeit keine Rolle spielt. Ein Ort der Leidenschaft & Hingabe zur Kunst Musik. 'More than an Vinyl Shop' eben. Aus purer Überzeugung.. Schau vorbei und genieße Platten, Musik, interessante Gespräche und eine chillige Atmosphäre."
	/>
</svelte:head>

<div class="h-min w-full bg-secondary-500 text-black flex text-xs">
	<span class="scale-50 -m-1"><Info /></span>Diese Website wird aktiv entwickelt. Wir bitten um
	Nachsicht, falls Ladezeiten etwas länger dauern!
</div>

<Carousel />

<div
	class="w-full flex flex-col justify-center text-center items-center pt-6 pb-4 bg-primary-400 dark:bg-primary-600 select-none"
>
	<h1 class="h2 w-fit dark:text-black">Aktuelle Öffnungszeiten</h1>
	<div class="flex flex-col items-start">
		{#each data.times as time}
			<p
				class=" dark:text-black text-2xl mt-4 whitespace-nowrap flex items-center justify-between w-full"
			>
				{shortDate(time.from)}
				<span class="text-xl font-thin ml-2.5 text-right">{fromToText(time)}</span>
			</p>
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

<div
	class="w-full flex lg:flex-row flex-col lg:flex-wrap py-2 justify-center lg:items-start items-center cursor-default mb-8"
>
	<div class="card lg:w-[40vw] w-[90%] h-max-[30rem] mx-4 my-2 rounded-lg variant-filled-secondary">
		<header class="relative">
			<Image
				lqclass="w-full rounded-lg shrink-0 h-auto"
				lqsrc="images/meinladenlq.webp"
				lqwidth="144px"
				lqheight="108px"
				hqclass="w-full rounded-lg shrink-0 h-auto"
				hqimage={MeinLaden}
				hqheight="1080px"
				hqwidth="1440px"
				hqloading="eager"
				alt="Laden Eingang"
				{mount}
			/>
		</header>
		<div class="md:p-6 p-4">
			<h2 class="h3 mb-2">Mein Laden.</h2>
			<p class="whitespace-break-spaces">
				{`Mein Plattenladen in Graz (Steiermark) ist nicht nur "Geschäft" - es ist Lebensgefühl. Ein Ort, bei dem Zeit keine Rolle spielt. Ein Ort der Leidenschaft & Hingabe zur Kunst Musik. "More than an Vinyl Shop" eben. Aus purer Überzeugung...`}
			</p>
		</div>
	</div>

	<div class="card lg:w-[40vw] w-[90%] mx-4 my-2 rounded-lg variant-filled-secondary">
		<header class="relative">
			<Image
				lqclass="w-full rounded-lg shrink-0 h-auto"
				lqsrc="images/meinplattenlq.webp"
				lqwidth="144px"
				lqheight="108px"
				hqclass="w-full rounded-lg shrink-0 h-auto"
				hqimage={MeinPlatten}
				hqheight="1080px"
				hqwidth="1440px"
				hqloading="eager"
				alt="Einige Platten"
				{mount}
			/>
		</header>
		<div class="md:p-6 p-4">
			<h2 class="h3 mb-2">Meine Platten.</h2>
			<p class="whitespace-break-spaces">
				{`Im Laufe der Zeit sammelten sich die Werke. Ohne Druck, ohne Stress. Die nunmehr exklusive Vinyl-Kollektion beinhaltet seltenste Ausgaben und echte Schmuckstücke. Wenn es nach meinem Geschmack geht, versteht sich. Vielleicht findest du hier genau deine Platte...`}
			</p>
		</div>
	</div>
</div>

<Carousel2 />
