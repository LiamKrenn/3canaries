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
	class="card w-[40rem] h-min mx-4 variant-ghost-surface rounded-lg my-2 md:mb-8 flex flex-col justify-center"
>
	{#if image}
		<img
			class="h-min rounded-t-lg brightness-75 select-none"
			src={`${url}/${article.collectionId}/${article.id}/${article.image}`}
			alt={`Foto von ${article.title}`}
			width="2560px"
			height="853px"
		/>
	{/if}

	<div class="flex relative">
		<h1 class="md:mt-6 md:mr-24 md:mx-6 mt-4 ml-4 h2 underline decoration-1 underline-offset-4">
			{@html article.title}
		</h1>
		<p class="absolute right-0 mr-3 mt-2 md:text-xl text-lg text-surface-600-300-token">{date}</p>
	</div>
	<h3 class="md:m-6 m-4 h3 break-words w-auto">{@html article.description}</h3>
</div>
