<script lang="ts">
	import { url } from '$lib/PocketBase';
	import NewsElement from '$lib/components/NewsElement.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full flex flex-col justify-center items-center">
	<h1 class="h1 lg:mt-16 lg:mb-12 mb-5 mt-8 text-center">News & Events</h1>
	<div class="flex w-full justify-center flex-wrap">
		{#each data.news as news}
			<NewsElement {news} />
		{/each}
	</div>
</div>
