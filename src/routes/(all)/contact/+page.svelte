<script lang="ts">
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>3Canaries | Kontakt</title>
	<meta name="description" content="Adresse, Telefon und E-Mail von Three Canaries records." />
</svelte:head>

<div
	class="w-full h-full bg-secondary-500 dark:bg-secondary-600 text-surface-900 flex py-8 md:py-16 justify-center"
>
	<div
		class=" 3xl:w-[50%] 2xl:w-[70%] xl:w-[80%] w-[90%] h-[85vh] flex flex-col items-center relative"
	>
		<h1 class="h1 mb-6 md:mb-12 cursor-default">Kontakt</h1>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="w-full h-[70%] relative">
			<div class="absolute top-0 placeholder w-full h-full rounded-none animate-pulse" />
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10873.510142870147!2d15.438877!3d47.052444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e4a9f9c88f7a7%3A0x8e49dd42251294b5!2sAm%20Langedelwehr%2034%2C%208010%20Graz%2C%20%C3%96sterreich!5e0!3m2!1sde!2sus!4v1691530339017!5m2!1sde!2sus"
				width="100%"
				height="100%"
				style="border:0;"
				loading="lazy"
				class="absolute"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
		<div
			class="flex flex-col lg:flex-row lg:justify-stretch w-min lg:w-full mt-8 md:mt-10 lg:flex-nowrap flex-wrap cursor-default"
		>
			<div class="lg:w-full">
				<h3 class="h3 mb-3 text-4xl">Kontakt</h3>
				<p class="font-bold text-xl mb-1">
					Telefon: <span class="font-normal">0677 64 82 28 33</span>
				</p>
				<p class="font-bold text-xl">
					E-Mail: <a
						href="mailto:contact@3canaries.com"
						class="font-normal underline hover:no-underline decoration-1"
						rel="noreferrer">contact@3canaries.com</a
					>
				</p>
			</div>
			<div class="lg:w-full xl:mx-4 lg:mx-2 lg:my-0 my-10">
				<h3 class="h3 mb-3 text-4xl">Adresse</h3>
				<p class="font-bold text-xl mb-1">Three Canaries records.</p>
				<p class="text-xl whitespace-nowrap">Am Langedelwehr 34/1, 8010 Graz</p>
			</div>
			<div class="w-full">
				<h3 class="h3 mb-3 text-4xl">Öffnungszeiten</h3>
				<p class="font-bold text-xl mb-1">we're open when we're open ;)</p>
				<a class="text-xl flex underline decoration-1" href="/open-times"
					>Unsere Öffnungszeiten <i class="mt-0.5 -ml-0.5"><ChevronRight /></i>
				</a>
			</div>
		</div>
	</div>
</div>
