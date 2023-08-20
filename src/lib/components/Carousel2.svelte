<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import { onMount } from 'svelte';

	// @ts-ignore
	import Scnd1 from '$lib/assets/images/scnd1hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2400;2560&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import Scnd2 from '$lib/assets/images/scnd2hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2400;2560&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import Scnd3 from '$lib/assets/images/scnd3hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2400;2560&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import Scnd4 from '$lib/assets/images/scnd4hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2400;2560&format=avif;webp;jpg&as=picture';
	import Image from './Image.svelte';

	const images = [Scnd1, Scnd2, Scnd3, Scnd4];

	let elemCarousel: HTMLDivElement;
	let counter: number = 0;
	const pages: number = images.length;

	function carouselLeft(): void {
		counter = (counter - 1 + pages) % pages;
		elemCarousel.scroll(counter * elemCarousel.clientWidth, 0);
	}

	function carouselRight(): void {
		counter = (counter + 1) % pages;
		elemCarousel.scroll(counter * elemCarousel.clientWidth, 0);
	}

	function resize(): void {
		elemCarousel.style.scrollBehavior = 'auto';
		elemCarousel.scrollTo(counter * elemCarousel.clientWidth, 0);
		elemCarousel.style.scrollBehavior = 'smooth';
	}

	let mount = false;
	onMount(() => {
		mount = true;
	});
</script>

<svelte:window on:resize={resize} />

<div class="grid items-center relative">
	<div
		bind:this={elemCarousel}
		class="snap-x snap-mandatory scroll-smooth flex overflow-y-hidden overflow-x-hidden"
	>
		{#each images as image}
			<div class="min-w-full h-[50vh] flex items-center justify-center relative">
				<Image
					lqclass="min-w-full h-[50vh] object-cover blur-sm"
					lqsrc="images/scnd{images.indexOf(image) + 1}lq.webp"
					lqwidth="256px"
					lqheight="171px"
					hqclass="min-w-full h-[50vh] object-cover absolute top-0 left-0"
					hqimage={image}
					hqloading="lazy"
					hqwidth="1440px"
					hqheight="960px"
					alt="Fotos vom Laden"
					{mount}
				/>
			</div>
		{/each}
	</div>
	<button
		type="button"
		class="btn-icon variant-filled absolute sm:scale-100 scale-75 lg:left-[10%] md:left-[3%] left-[1%] top-[50%] stroke-current"
		on:click={carouselLeft}
		aria-label="Vorheriges Foto"
	>
		<ChevronLeft />
	</button>
	<button
		type="button"
		class="btn-icon variant-filled absolute sm:scale-100 scale-75 lg:right-[10%] md:right-[3%] right-[1%] top-[50%] stroke-current"
		on:click={carouselRight}
		aria-label="Nächstes Foto"
	>
		<ChevronRight />
	</button>
</div>
