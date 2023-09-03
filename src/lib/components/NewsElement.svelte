<script lang="ts">
	import { url } from '$lib/PocketBase';
	import type { News } from '$lib/Types';
	import { onMount } from 'svelte';

	export let article: News;

	const date: string = new Date(article.display_date).toLocaleDateString('de-DE', {
		dateStyle: 'short'
	});
	const image: boolean = article.image != '';

	let mount = false
	onMount(() => { mount = true; })
</script>

<div
	class="card dark:bg-surface-800 article:max-w-[42rem] article:min-w-[42rem] min-w-[90%] max-w-[90%] mx-4 variant-ghost-surface rounded-lg my-2 md:my-4 flex flex-col relative cursor-default"
>
	<div
		class="absolute bottom-0.5 mx-1 inset-x-0 h-7 bg-gradient-to-b from-transparent rounded-b-lg to-surface-100 via-surface-100/80 dark:via-surface-800/80 dark:to-surface-800"
	/>
	<div class="overflow-y-auto hide-scrollbar rounded-t-lg mb-1 relative">
		{#if image}
			
			<img
				class="w-full h-auto brightness-75 select-none rounded-t-lg "
				src={`${url}/${article.collectionId}/${article.id}/${article.image_lq}`}
				alt={`Foto von ${article.title}`}
				width="192px"
				height="64px"
				loading="eager"
			/>
			{#if mount}
				<img
					class="w-full h-auto brightness-75 select-none rounded-t-lg absolute top-0"
					src={`${url}/${article.collectionId}/${article.id}/${article.image}`}
					alt={`Foto von ${article.title}`}
					width="960px"
					height="320px"
					loading="eager"
				/>
			{/if}
		{/if}

		<div class="flex relative justify-stretch">
			<h1
				class="md:mt-6 md:mx-6 mt-4 ml-4 h2 underline decoration-1 underline-offset-4 md:!mr-[85px] !mr-[78px]"
			>
				{article.title}
			</h1>
			<p class="absolute right-0 mr-3 mt-2 md:text-xl text-lg text-surface-600-300-token">{date}</p>
		</div>
		<h3 class="md:m-6 m-4 h3 break-words w-auto">{@html article.description}</h3>
	</div>
</div>
