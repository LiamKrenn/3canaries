<script lang="ts">
	import { page } from '$app/stores';
	import type { Item } from '$lib/NavItems';

	export let attrs: string;
	export let item: Item;

	let iattr = attrs + ' justify-center items-center whitespace-nowrap select-none';
</script>

{#if $page.url.pathname == item.link}
	<a class="navselect {iattr} " href={item.link} data-sveltekit-preload-data>{item.title}</a>
{:else}
	<a class="navunselect {iattr}" href={item.link} data-sveltekit-preload-data>{item.title}</a>
{/if}

<style>
	.navselect,
	.navunselect {
		position: relative;
	}

	:global(.dark .navselect:after),
	:global(.navselect:after),
	:global(.dark .navunselect:after),
	:global(.navunselect:after) {
		bottom: 20%;
		content: '';
		display: block;
		border-radius: 999px;
		height: 1px;
		position: absolute;
	}

	:global(.dark .navunselect:after),
	:global(.navunselect:after) {
		left: 50%;
		background-color: #000;
		transition: width 0.15s ease 0s, left 0.15s ease 0s;
		width: 0px;
	}

	:global(.dark .navselect:after),
	:global(.navselect:after),
	.navunselect:hover:after {
		width: 80%;
		left: 10%;
	}

	:global(.dark .navselect:after),
	:global(.navselect:after) {
		background-color: #000;
	}

	:global(.dark .navunselect:after),
	:global(.dark .navselect:after) {
		background-color: #fff;
	}
</style>
