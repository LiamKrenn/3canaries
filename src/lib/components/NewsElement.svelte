<script lang="ts">
	import { url } from '$lib/PocketBase';
	import type { News } from '$lib/Types';

	export let article: News;

	const date: string = new Date(article.display_date).toLocaleDateString('de-DE', {
		dateStyle: 'short'
	});
	const image: boolean = article.image != '';
</script>

<div
	class="card dark:bg-surface-800 w-[40rem] news:max-h-[25rem] news-sm:max-h-[40rem] max-h-[29rem] mx-4 variant-ghost-surface rounded-lg my-2 md:my-4 flex flex-col relative"
>
	<div
		class="absolute bottom-0.5 mx-1 inset-x-0 h-7 bg-gradient-to-b from-transparent rounded-b-lg to-surface-100 via-surface-100/80 dark:via-surface-800/80 dark:to-surface-800"
	/>
	<div class="overflow-y-auto hide-scrollbar rounded-t-lg mb-1">
		{#if image}
			<img
				class="h-min brightness-75 select-none"
				src={`${url}/${article.collectionId}/${article.id}/${article.image}`}
				alt={`Foto von ${article.title}`}
				width="2560px"
				height="853px"
			/>
		{/if}

		<div class="flex relative justify-stretch">
			<h1
				class="md:mt-6 md:mx-6 mt-4 ml-4 h2 underline decoration-1 underline-offset-4 md:!mr-[85px] !mr-[78px]"
			>
				{@html article.title}
			</h1>
			<p class="absolute right-0 mr-3 mt-2 md:text-xl text-lg text-surface-600-300-token">{date}</p>
		</div>
		<h3 class="md:m-6 m-4 h3 break-words w-auto">{@html article.description}</h3>
	</div>
</div>
