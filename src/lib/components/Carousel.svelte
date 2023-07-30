<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	let images = ['title1hq', 'title2hq', 'title3hq'];

	let elemCarousel: HTMLDivElement;
	let counter: number = 0;
	const pages: number = 3;

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
</script>

<svelte:window on:resize={resize} />

<div class="grid items-center relative">
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-y-hidden overflow-x-hidden">
		{#each images as image}
			<div class="min-w-full h-[50vh] flex items-center justify-center my-[-7vh] relative">
				<img
					class="min-w-full h-[50vh] object-cover "
					src="images/{image}.webp"
					alt={image}
					loading="lazy"
					height="2560px"
					width="1707px"
				/>
				<div class="absolute text-5xl justify-center flex items-center w-full h-[35vh]">
					<p>{image}</p>
				</div>
			</div>
		{/each}
	</div>
	<button type="button" class="btn-icon variant-filled absolute left-[10%] top-[50%] " on:click={carouselLeft}>
		<ChevronLeft />
	</button>
	<button
		type="button"
		class="btn-icon variant-filled absolute right-[10%]"
		on:click={carouselRight}
	>
		<ChevronRight />
	</button>
</div>
