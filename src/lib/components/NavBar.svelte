<script lang="ts">
	import Socials from './Socials.svelte';

	import NavItem from '$lib/components/NavItem.svelte';
	import { items } from '$lib/NavItems';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import SideNav from './SideNav.svelte';
	import Image from './Image.svelte';
	import { onMount } from 'svelte';

	// @ts-ignore
	import Logo from '$lib/assets/images/C_TCR_notext_cut.webp?w=64;128;256&format=avif;webp;jpg&as=picture';

	let mount = false;
	onMount(() => {
		mount = true;
	});
</script>

<div class="flex justify-between w-screen">
	<div class="flex h-20 justify-center items-center pl-1.5">
		<a
			class=" lg:w-fit lg:items-center mx-2 justify-center flex-shrink-0 relative select-none"
			href="/"
		>
			<Image
				lqclass="w-20 p-0.5 hover:scale-105 duration-150 blur-sm"
				lqsrc="images/C_TCR_notext_cut_lq.webp"
				lqwidth="51px"
				lqheight="44px"
				hqclass="w-20 p-0.5 hover:scale-105 duration-150"
				hqimage={Logo}
				hqwidth="256px"
				hqheight="220px"
				alt="Three Canaries Records Logo"
				{mount}
			/>
		</a>
		<div class="tc:flex hidden select-none">
			<img
				class="ml-2 h-10 ml:hidden flex w-max"
				src="images/C_TC_text_cut_mq.webp"
				alt="Three Canaries"
				height="100px"
				width="769px"
			/>
		</div>
		{#each items as item}
			<NavItem {item} attrs="ml:flex hidden h-20 xl:px-4 px-2.5 xl:text-2xl text-xl" />
		{/each}
	</div>

	<div class="flex justify-center items-center">
		<div class="xl:inline hidden mr-4">
			<LightSwitch />
		</div>
		<a
			class="xl:mr-2.5"
			href="https://www.discogs.com/user/sckrenn/collection"
			target="_blank"
			rel="noreferrer"
		>
			<button class="xs:flex hidden btn variant-ghost-primary h-12 hover:brightness-75 select-none">
				Discogs
			</button>
		</a>
		<div class="xl:flex hidden mr-1.5"><Socials /></div>
		<SideNav />
	</div>
</div>
