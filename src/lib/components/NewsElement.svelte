<script lang="ts">
	import { url } from '$lib/PocketBase';
	import type { News } from '$lib/Types';

	export let news: News;

	const date = new Date(news.display_date).toLocaleDateString('de-DE', {dateStyle: "short"});
</script>

<div class="card max-w-[40rem] h-min mx-4 variant-ghost-surface rounded-lg my-2 mb-8 flex flex-col justify-center">
	<img
		class="h-min rounded-t-lg brightness-75"
		src={`${url}/${news.collectionId}/${news.id}/${news.image}`}
		alt={`Foto von ${news.title}`}
		width="2560px"
		height="853px"
	/>
  <div class="flex relative">
    <h1 class="md:mt-6 md:mx-6 mt-4 ml-4 h2 underline decoration-1 underline-offset-4">{@html news.title}</h1>
    <p class="absolute right-0 mr-3 mt-2 md:text-xl text-lg text-surface-600-300-token">{date}</p>
  </div>
  <h3 class="md:m-6 m-4 h3 break-words w-auto">{@html news.description}</h3>
  
  
</div>
