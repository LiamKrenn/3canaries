<script lang="ts">
	import { footerItems } from "$lib/NavItems";


</script>
<div class="w-full flex justify-center p-2  mt-8 select-none">
	<img class="w-80 " src="images/C_TC_text_cut.webp"/>
</div>
<div class="w-full flex justify-center px-2 pb-4 select-none">
	<img class="w-60 " src="images/R_text_cut.webp"/>
</div>
<div class="p-2 mb-2 flex flex-row flex-wrap justify-center">
  {#each footerItems as item}
		<a class="px-2  underline whitespace-nowrap" href={item.link}>{item.title}</a>
	{/each}
</div>