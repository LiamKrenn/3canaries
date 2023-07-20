<script lang="ts">
	import NavItem from '$lib/components/NavItem.svelte';
	import { items } from '$lib/NavItems';
</script>

<div class="flex">
	<div class="flex lg:w-fit w-full lg:justify-start lg:items-center lg:mx-2 justify-center flex-shrink-0">
		<a href="/">
			<img
				class="w-20 p-0.5 hover:scale-105 duration-150 select-none"
				src="images/logo_tr.webp"
				alt="3 Canaries Logo"
			/>
		</a>
	</div>
	{#each items as item}
		<NavItem {item} attrs="lg:flex  hidden h-20 px-4 " />
	{/each}
</div>
