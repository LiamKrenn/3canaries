<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error! {$page.status}</title>
	<meta name="description" content="Etwas ist schief gegangen. Code: {$page.status} Message: {$page.error?.message}" />
</svelte:head>

<div class="h-full w-full flex flex-col justify-center items-center bg-surface-800">
	<div class="absolute top-0 mt-8 flex items-center">
		<img class="h-20 mr-5" src="/images/C_TCR_notext_cut.webp" alt="Three Canaries Logo" />
		<img class="h-16" src="/images/C_TC_text_cut.webp" alt="Three Canaries Text" />
		<img class="h-12 mt-2 ml-4" src="/images/R_text_cut.webp" alt="Records. Text" />
	</div>
	{#if $page.status == 404}
		<h3 class="h2 mt-16 mb-6 text-white cursor-default">Wir konnten diese Seite nicht finden :/</h3>
		<img
			class="h-[50vh] w-[50vh]"
			height="480px"
			width="480px"
			src="/images/vinyl_search.gif"
			alt="2 People Searching GIF"
		/>
		<a class="text-white text-xl mt-6 underline" href="/">Zurück Hauptseite</a>
		<p class="absolute bottom-0 mb-8 text-surface-600 cursor-default">
			Falls das die Hauptseite ist, bitte <a
				class="underline cursor-pointer"
				href="mailto:contact@3canaries.com">bei uns melden</a
			>
		</p>
	{:else if $page.status == 500}
		<h3 class="h2 mt-16 mb-2 text-white cursor-default">Bei uns lief etwas schief!</h3>
		<p class="text-white cursor-default mb-4">
			Folge uns in der Zwischenzeit auf <a
				href="https://www.instagram.com/threecanaries.records/"
				class="underline cursor-pointer"
				target="_blank"
				rel="noreferrer">Instagram</a
			>
			und
			<a
				href="https://www.facebook.com/3canariesrecords/"
				class="underline cursor-pointer"
				target="_blank"
				rel="noreferrer">Facebook</a
			>!
		</p>
		<img
			class="h-[50vh] w-auto"
			height="237px"
			width="420px"
			src="/images/smth_went_wrong.gif"
			alt="Cat on Vinyl GIF"
		/>
		<p class="text-white cursor-default mt-4">
			Versuch es später oder <a class="text-white underline" href="/"
				>zurück Hauptseite</a
			>
		</p>

		<p class="absolute bottom-0 mb-8 text-surface-600 cursor-default">
			Falls das Problem weiterhin besteht, bitte <a
				class="underline cursor-pointer"
				href="mailto:contact@3canaries.com">bei uns melden</a
			>
		</p>
	{:else}
		<h2 class="h2 text-white">Irgendwas funktioniert nicht.</h2>
		<p class="text-white cursor-default mt-4">
			Versuche, zur <a class="text-white underline" href="/"
				>Hauptseite</a
			> zurück zu kehren.
		</p>

		<p class="text-surface-300 mt-8 cursor-default">
			Falls das Problem weiterhin besteht, <a
				class="underline cursor-pointer"
				href="mailto:contact@3canaries.com">melden</a
			>
			 sie sich bei uns, mit folgendem Code: "{$page.status}: {$page.error?.message}"
		</p>
	{/if}
</div>
