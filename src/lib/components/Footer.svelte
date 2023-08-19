<script lang="ts">
	import { footerItems } from '$lib/NavItems';

	// @ts-ignore
	import TC from '$lib/assets/images/C_TC_text_cut.webp?w=200;400;769&format=avif;webp;jpg&as=picture';
	// @ts-ignore
	import R from '$lib/assets/images/R_text_cut.webp?w=200;400;800;1200;1489&format=avif;webp;jpg&as=picture';
	import { onMount } from 'svelte';
	import Image from './Image.svelte';

	let mount = false;
	onMount(() => {
		mount = true;
	});
</script>

<div class="w-full flex flex-col items-center select-none mt-7 mb-5">
	<div class="relative mb-3">
		<Image
			lqclass="blur-sm w-80 h-auto"
			lqsrc="images/C_TC_text_cut_lq.webp"
			lqwidth="231px"
			lqheight="30px"
			hqclass="w-80 h-auto"
			hqimage={TC}
			hqwidth="769px"
			hqheight="100px"
			alt="Three Canaries Text"
			{mount}
		/>
	</div>
	<div class="relative">
		<Image
			lqclass="blur-sm w-60 h-auto"
			lqsrc="images/R_text_cut_lq.webp"
			lqwidth="149px"
			lqheight="33px"
			hqclass="w-60 h-auto"
			hqimage={R}
			hqwidth="1489px"
			hqheight="327px"
			alt="Three Canaries Text"
			{mount}
		/>
	</div>
</div>

<div class="p-2 mb-2 flex flex-row flex-wrap justify-center">
	{#each footerItems as item}
		<a class="px-2 underline whitespace-nowrap" href={item.link}>{item.title}</a>
	{/each}
</div>
