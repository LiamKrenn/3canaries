<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.postcss';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppBar, AppShell, Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import SideNav from '$lib/components/SideNav.svelte';
	import NavItem from '$lib/components/NavItem.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { items } from '$lib/NavItems';
	import Footer from '$lib/components/Footer.svelte';
	
	import type { PageData } from './$types';
  export let data: PageData;
	export let taas;
</script>

<AppShell class="bg-white dark:bg-surface-800">
	<svelte:fragment slot="header">
		<AppBar padding="p-0" gap="gap-0" background="bg-white dark:bg-surface-800">
			<NavBar />
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
	<slot />
</AppShell>
