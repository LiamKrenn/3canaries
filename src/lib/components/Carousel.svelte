<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import { onMount } from 'svelte';
	import Picture from './Picture.svelte';

	// @ts-ignore
	import Title1 from '$lib/assets/images/title1hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2560&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import Title2 from '$lib/assets/images/title2hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2560&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import Title3 from '$lib/assets/images/title3hq.webp?w=200;400;800;1200;1440;1600;1800;2000;2250;2560&format=avif;webp;jpg&as=picture';
	import Image from './Image.svelte';

	let content: { [key: string]: { title: string; content: string; hq: any; loaded: boolean } } = {
		1: {
			title: 'Three Canaries Records',
			content: '-  more than a vinyl shop  -',
			hq: Title1,
			loaded: false
		},
		2: {
			title: 'Discogs',
			content:
				'Meine komplette "Vinylographie" findest du auf der Online-Plattform Discogs, bei der auch einfach & bequem Bestellungen möglich sind!',
			hq: Title2,
			loaded: false
		},
		3: {
			title: 'Oldschool-Plattenladen',
			content: `Besuch uns einfach in unserem Plattenladen "Three Canaries" in Graz! It's more than a Vinyl Shop. #seeyouthere`,
			hq: Title3,
			loaded: false
		}
	};

	let elemCarousel: HTMLDivElement;
	let counter: number = 0;
	const pages: number = Object.keys(content).length;

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
		{#each Object.keys(content) as image}
			<div class="min-w-full h-[50vh] flex items-center justify-center my-[-7vh] relative">
				<Image
					lqclass="min-w-full h-[50vh] object-cover brightness-[.4] blur-sm"
					lqsrc="images/title{image}lq.webp"
					lqwidth="128px"
					lqheight="86px"
					hqclass="min-w-full h-[50vh] object-cover brightness-[.4] blur-[1px]"
					hqimage={content[image].hq}
					hqloading="eager"
					hqwidth="2560px"
					hqheight="1707px"
					alt="Hintergrundbild"
					{mount}
				/>
				<div
					class="absolute cursor-default justify-center flex flex-col items-center lg:w-[40rem] w-[85%] h-[24rem] xs:h-[23rem] md:h-[20rem] max-h-[35vh] border-white border-4 text-center"
				>
					<h1 class="h1 text-secondary-500">{content[image].title}</h1>
					<p class="text-white text-2xl mx-6 mt-4">{content[image].content}</p>
				</div>
			</div>
		{/each}
	</div>
	<button
		type="button"
		class="btn-icon variant-filled absolute sm:scale-100 scale-75 lg:left-[10%] md:left-[3%] left-[1%] top-[45%] stroke-current"
		on:click={carouselLeft}
	>
		<ChevronLeft />
	</button>
	<button
		type="button"
		class="btn-icon variant-filled absolute sm:scale-100 scale-75 lg:right-[10%] md:right-[3%] right-[1%] top-[45%] stroke-current"
		on:click={carouselRight}
	>
		<ChevronRight />
	</button>
</div>
