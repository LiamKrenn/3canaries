<script lang="ts">
	import { AppBar, AppShell, Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
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
