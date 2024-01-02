<script lang="ts">

	type ImgProps = {
		src: string;
		w: number;
	};
	type ImgPropsH = ImgProps & { h: number };
	type ImgMeta = { img: ImgPropsH; sources: { [key: string]: ImgProps[] } };

	export let mount: boolean;

	export let alt: string;

	export let hqimage: ImgMeta[];
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

	// HQ
	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(hqimage instanceof Array)) hqimage = [hqimage];
	const sources = hqimage[0].sources;
	const fallback = hqimage[0].img;
</script>

{#if !loaded}
	<img class={lqclass} src={lqsrc} {alt} loading={lqloading} height={lqheight} width={lqwidth} />
{/if}

{#if mount}
	<div style={`max-width: ${fallback.w}px`}>
		<picture class="">
			{#each Object.entries(sources) as [type, srcMeta]}
				<source type="image/{type}" srcset={srcMeta.map((m) => `${m.src} ${m.w}w`).join(', ')} />
			{/each}
			<img
				on:load={() => {
					loaded = true;
				}}
				src={fallback.src}
				{alt}
				loading={hqloading}
				class="{hqclass} {loaded ? '' : 'absolute top-0 left-0'}"
				width={hqwidth}
				height={hqheight}
			/>
		</picture>
	</div>
{/if}
