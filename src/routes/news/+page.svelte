<script lang="ts">
	import { getNews, url } from '$lib/PocketBase';
	import type { News } from '$lib/Types';
	import NewsElement from '$lib/components/NewsElement.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let page: number = 1;
	let news: News[] = data.news;
	$: unloadedPage = page < data.totalPages;
	let loading = false;

	async function loadMoreNews() {
		if (!unloadedPage) return;
		page = page + 1;
		loading = true;
		news = news.concat(await getNews(page));
		loading = false;
	}
</script>

<div class="w-full flex flex-col justify-center items-center mb-16">
	<h1 class="h1 lg:mt-16 lg:mb-12 mb-5 mt-8 text-center select-none">News & Events</h1>
	<div class="flex w-full max-w-[130rem] justify-center flex-wrap">
		{#each news as article}
			<NewsElement {article} />
		{/each}
	</div>
	{#if unloadedPage && !loading}
		<button
			on:click={loadMoreNews}
			class="mt-4 btn bg-surface-800-100-token dark:text-black text-white px-8 relative bottom-0 rounded-none"
			>Ältere laden</button
		>
	{/if}
</div>
