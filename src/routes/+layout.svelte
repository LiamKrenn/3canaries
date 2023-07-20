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
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar padding="p-0" gap="gap-0">
			<svelte:fragment slot="lead">
				<SideNav />
			</svelte:fragment>
			<NavBar/>
			<svelte:fragment slot="trail">
				<div class="mx-2 xs:inline hidden">
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<Footer/>
	</svelte:fragment>
	<slot />
</AppShell>
