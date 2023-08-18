<script lang="ts">
	type ImgProps = {
		src: string;
		w: number;
	};
	type ImgPropsH = ImgProps & { h: number };

	type ImgMeta = { img: ImgPropsH; sources: { [key: string]: ImgProps[] } };

	export let meta: ImgMeta[];
	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(meta instanceof Array)) meta = [meta];

	const sources = meta[0].sources;
	const fallback = meta[0].img;

	export let alt = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';

	export let imageClass = '';
	export let pictureClass = '';

	export let width: string;
	export let height: string;
</script>

<div style={`max-width: ${fallback.w}px`}>
	<picture class={pictureClass}>
		{#each Object.entries(sources) as [type, srcMeta]}
			<source
				type="image/{type}"
				srcset={srcMeta.map((m) => `${m.src} ${m.w}w`).join(', ')}
			/>
		{/each}
		<img on:load src={fallback.src} {alt} {loading} class={imageClass} {height} {width} />
	</picture>
</div>
