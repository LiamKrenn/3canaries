<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	let colors = ['title1hq', 'title2hq', 'title3hq'];

	let elemCarousel: HTMLDivElement;
  let counter: number = 0;


function carouselLeft(): void {
	const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
}

function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
}

  
</script>


<div class="card grid  items-center">
	<!-- Button: Left -->
	<button class="bg-red-400  w-[70px] left-40 absolute align-middle flex justify-center py-44 " on:click={carouselLeft}>
    <div >
      <ChevronLeft />
    </div>
  </button>
	
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-hidden overflow-y-hidden">
		{#each colors as color}
			<img
				class="snap-center w-full mt-[-25rem] mb-[-20rem] "
				src="images/{color}.webp"
				alt={color}
				loading="eager"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled absolute right-20" on:click={carouselRight}>
    <ChevronRight />
	</button>
</div>






