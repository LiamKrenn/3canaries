<script lang="ts">
	import Picture from './Picture.svelte';

	export let mount: boolean;

	export let alt: string;

	export let hqimage: any;
	export let hqclass: string;
	export let hqheight: string;
	export let hqwidth: string;
	export let hqloading: 'lazy' | 'eager' | null | undefined = 'lazy';

	export let lqsrc: string;
	export let lqclass: string;
	export let lqheight: string;
	export let lqwidth: string;
	export let lqloading: 'lazy' | 'eager' | null | undefined = 'eager';

	let loaded: boolean = false;
</script>

{#if !loaded}
	<img class={lqclass} src={lqsrc} {alt} loading={lqloading} height={lqheight} width={lqwidth} />
{/if}
{#if mount}
	<Picture
		meta={hqimage}
		loading={hqloading}
		{alt}
		height={hqheight}
		width={hqwidth}
		imageClass="{hqclass} {loaded ? '' : 'absolute top-0 left-0'}"
		on:load={() => {
			loaded = true;
		}}
	/>
{/if}
