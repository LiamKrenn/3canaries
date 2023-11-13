<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { navigating } from '$app/stores';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { url } from '$lib/PocketBase';
	export let data: PageData;

	let mount = false;
	onMount(() => {
		mount = true;
	});
</script>

<svelte:head>
	<title>3Canaries | Partner</title>
	<meta name="description" content={`Alle Partner von "Three Canaries Records".`} />
</svelte:head>

<div
	class="py-20 w-full flex flex-col justify-center items-center bg-secondary-500 dark:bg-secondary-600 dark:text-surface-900 cursor-default"
>
	<h1 class="h1">Unsere Partner...</h1>
	<div class="flex mt-16 flex-row flex-wrap h-full justify-center">
		{#each data.partners as partner}
			<div class="mx-4 shrink-0 h-full mb-8 relative">
				<img
					class="h-[330px] w-[330px]"
					src={`${url}/${partner.collectionId}/${partner.id}/${partner.logo_lq}`}
					alt={`${partner.name} Logo`}
					width="100px"
					height="100px"
					loading="eager"
				/>
				{#if mount}
					<img
						class="h-[330px] w-[330px] absolute top-0"
						src={`${url}/${partner.collectionId}/${partner.id}/${partner.logo}`}
						alt={`${partner.name} Logo`}
						width="330px"
						height="330px"
						loading="eager"
					/>
				{/if}
				<h1 class="text-3xl mt-6 h1">{@html partner.name}</h1>
				{#if partner.description != '' && partner.description != undefined}
					<p class="text-xl mt-4 w-[330px]">{partner.description}</p>
				{/if}
				{#if partner.link != '' && partner.link != undefined}
					<a
						class="mt-8 btn bg-black text-white px-8 rounded-none relative bottom-0"
						href={partner.link}
						target="_blank"
						rel="noreferrer">Mehr lesen</a
					>
				{/if}
			</div>
		{/each}
	</div>
</div>
