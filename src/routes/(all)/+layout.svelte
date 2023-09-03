<script lang="ts">
	import { AppBar, AppShell, Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { afterNavigate } from '$app/navigation';
	
	afterNavigate((params: any) => {
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
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
