<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import { onMount } from 'svelte';
	const images = ['title1', 'title2', 'title3'];
	const content: { [key: string]: { title: string; content: string; }; } = {
		'title1': {
			title: 'Three Canaries Records',
			content: '-  more than a vinyl shop  -'
		},
		'title2': {
			title: 'Discogs',
			content:
				'Meine komplette "Vinylographie" findest du auf der Online-Plattform Discogs, bei der auch einfach & bequem Bestellungen möglich sind!'
		},
		'title3': {
			title: 'Oldschool-Plattenladen',
			content: `Besuch uns einfach in unserem Plattenladen "Three Canaries" in Graz! It's more than a Vinyl Shop. #seeyouthere`
		}
	};

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


	let mount = false
	onMount(() => { mount = true; })
</script>

<svelte:window on:resize={resize} />

<div class="grid items-center relative">
	<div
		bind:this={elemCarousel}
		class="snap-x snap-mandatory scroll-smooth flex overflow-y-hidden overflow-x-hidden"
	>
		{#each images as image}
			<div class="min-w-full h-[50vh] flex items-center justify-center my-[-7vh] relative">
				<img
					class="absolute top-0 min-w-full h-[50vh] object-cover brightness-[.4] blur-sm"
					src="images/{image}lq.webp"
					alt={image}
					loading="eager"
					height="128px"
					width="86px"
				/>
				{#if mount}
				<img
					class="absolute top-0 min-w-full h-[50vh] object-cover brightness-[.4] blur-[1px]"
					src="images/{image}mq.webp"
					alt={image}
					loading="eager"
					height="1080px"
					width="720px"
				/>
				{/if}				
				<div
					class="absolute cursor-default justify-center flex flex-col items-center lg:w-[40rem] w-[85%]  h-[24rem] xs:h-[23rem] md:h-[20rem] max-h-[35vh]  border-white border-4 text-center"
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
