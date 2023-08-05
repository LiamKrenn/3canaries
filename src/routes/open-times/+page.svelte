<script lang="ts">
	import OpenTimeCard from '$lib/components/OpenTimeCard.svelte';
import type { PageData } from './$types';

export let data: PageData;
</script>

<div class="flex">
	{#each data.times as time (time.id)}
	<OpenTimeCard time={time}/>
{/each}
</div>
