<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { navigating } from '$app/stores';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	export let data: PageData;

	console.log(data.partners[0]);
	
</script>

<div class="py-20 w-full flex justify-center items-center bg-secondary-500 dark:bg-primary-900">
	<div class="">
		<h1 class="h1 ">Unsere Partner...</h1>
		<div class="flex mt-16">
			{#each data.partners as partner}
		<div class="mx-4">
			<img class="h-80" src="{partner.logourl}"/>
			<p class="text-4xl mt-6">{@html partner.name}</p>
			<p class="text-2xl mt-2">{partner.description}</p>
			<a class="mt-8 btn bg-black text-white px-8 rounded-none" href="{partner.link}" target="_blank" rel="noreferrer">Mehr lesen</a>
		</div>
		{/each}
		</div>
		
	</div>
</div>


