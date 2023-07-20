<script lang="ts">
	import CloseIcon from '$lib/CloseIcon.svelte';
	import MenuIcon from '$lib/MenuIcon.svelte';
	import { Drawer, drawerStore, type DrawerSettings, LightSwitch } from '@skeletonlabs/skeleton';
	import NavItem from './NavItem.svelte';
	import { items } from '$lib/NavItems';

	const drawerSettings: DrawerSettings = {
		id: 'sideNav',
		// Provide your property overrides:
		bgDrawer: '',
		bgBackdrop: 'bg-surface-500/50',
		width: 'w-[220px] ',
		padding: 'p-0',
		rounded: 'rounded-none'
	};

	function sideOpen() {
		drawerStore.open(drawerSettings);
	}

	function sideClose() {
		drawerStore.close();
	}
</script>

<Drawer>
	<!-- svelte-ignore a11y-click-events-have-key-events -->

	<div class="h-full flex flex-col justify-between">
		<div class="">
			<div
				on:click={sideClose}
				class=" flex h-20 w-20 cursor-pointer justify-center items-center hover:scale-105 duration-150 "
			>
				<CloseIcon />
			</div>
			{#each items as item}
				<NavItem {item} attrs="flex h-12 pb-4 py-2  " />
			{/each}
		</div>
		<div class="flex justify-center mb-4">
			<LightSwitch bgLight="bg-surface-50"  ring="ring-[1.5px] ring-surface-700-200-token"/>
		</div>
	</div>
</Drawer>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={sideOpen}
	class="lg:hidden flex h-20 w-20 cursor-pointer justify-center items-center hover:scale-105 duration-150"
>
	<MenuIcon />
</div>
