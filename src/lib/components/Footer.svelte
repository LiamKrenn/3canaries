<script lang="ts">
	import { footerItems } from "$lib/NavItems";


</script>

<div class="p-2 mb-2 flex justify-center">
  {#each footerItems as item}
		<a class="px-2  underline" href={item.link}>{item.title}</a>
	{/each}
</div>