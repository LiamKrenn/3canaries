<script lang="ts">
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import { Drawer, drawerStore, type DrawerSettings, LightSwitch } from '@skeletonlabs/skeleton';
	import NavItem from './NavItem.svelte';
	import { items } from '$lib/NavItems';
	import Socials from './Socials.svelte';
	import Image from './Image.svelte';
	import { onMount } from 'svelte';

	// @ts-ignore
	import Logo from '$lib/assets/images/C_TCR_Transp_cut.webp?w=64;128;200&format=avif;webp;jpg&as=picture';

	const drawerSettings: DrawerSettings = {
		id: 'sideNav',
		// Provide your property overrides:
		bgDrawer: '',
		bgBackdrop: 'bg-surface-500/50',
		width: 'w-[220px]',
		padding: 'p-0',
		rounded: 'rounded-none',
		position: 'right'
	};

	function sideOpen() {
		drawerStore.open(drawerSettings);
	}

	function sideClose() {
		drawerStore.close();
	}

	let mount = false;
	onMount(() => {
		mount = true;
	});
</script>

<Drawer>
	<!-- svelte-ignore a11y-click-events-have-key-events -->

	<div class="h-full flex flex-col justify-between">
		<div class="">
			<div class=" flex h-20 mx-4 pl-2 justify-between items-center">
				<div class=""><LightSwitch bgLight="bg-surface-50" ring="ring-[1.5px] ring-current" /></div>

				<button class="cursor-pointer hover:scale-105 duration-150" on:click={sideClose}>
					<CloseIcon />
				</button>
			</div>
			{#each items as item}
				<NavItem {item} attrs=" h-12 pb-4 py-2 lg:hidden flex text-2xl" />
			{/each}
			<div class="flex w-full justify-center mt-2">
				<Socials />
			</div>
			<div class="flex w-full justify-center mt-3">
				<a class="" href="https://www.discogs.com/user/sckrenn/collection" target="_blank">
					<button class=" btn variant-ghost-primary h-12 hover:brightness-75 select-none">
						My Collection
					</button>
				</a>
			</div>
		</div>
		<div class="flex justify-center xs:w-[220px] w-full mb-4 flex-shrink select-none">
			<div class="relative">
				<Image
					lqclass="xs:w-[180px] w-[120px] blur-sm"
					lqsrc="images/C_TCR_Transp_cut_lq.webp"
					lqwidth="32px"
					lqheight="33px"
					hqclass="xs:w-[180px] w-[120px]"
					hqimage={Logo}
					hqwidth="200px"
					hqheight="209px"
					alt="Three Canaries Records Logo"
					{mount}
				/>
			</div>
		</div>
	</div>
</Drawer>

<button
	on:click={sideOpen}
	class="xl:hidden flex h-20 w-20 cursor-pointer justify-center items-center hover:scale-105 duration-150"
>
	<MenuIcon />
</button>
