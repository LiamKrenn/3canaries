<script>
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
</script>

<div class="flex flex-col w-full h-full items-center justify-center">
	<a
		class="flex items-center justify-center hover:scale-110 duration-150"
		target="_blank"
		href="https://www.facebook.com/3canariesrecords/"
		rel="noreferrer"
	>
		<FacebookIcon />
		<h1 class="h1 mt-2 ml-2">Facebook</h1>
	</a>


    <a
		class="flex items-center justify-center hover:scale-110 duration-150 mt-4"
		target="_blank"
		href="https://www.instagram.com/threecanaries.records/"
		rel="noreferrer"
	>
		<InstagramIcon />
		<h1 class="h1 mt-2 ml-2">Instagram</h1>
	</a>
	
    <a href="/open-times" class="mt-32 underline">
        <h2 class="h2">Zurück</h2>
    </a>
    
</div>

