<script lang="ts">
	import type { Times } from '$lib/Types';

	export let time: Times;

	const date: Date = new Date(time.from);
	const from: string = time.from.slice(11, 16);
	const to: string = time.to.slice(11, 16);
	const weekday: string = date.toLocaleDateString('de-DE', { weekday: 'long' });
	const longdate: string = date.toLocaleDateString('de-DE', { day: 'numeric' });
  const desc: boolean = ((time.event != '') || (time.event_description != ''))
</script>

<div class="card flex lg:flex-row flex-col w-[80%] variant-ghost-primary m-1 rounded-lg cursor-default card-hover py-2 dark:text-surface-50 ">
  <div class="shrink-0 lg:w-[20rem] w-full pt-3 pl-4 pb-1.5 pr-2 ">
    <h2 class="h2 font-bold break-words">{longdate}., {weekday}</h2>
    <h3 class="h3 mt-3 ">{from}-{to}</h3>
  </div>
  <div class="lg:border-r-[1px] lg:border-b-0 {desc ? 'border-b-[1px]' : 'hidden'} mx-3 lg:mx-0 border-surface-500 mt-0.5 lg:mt-0 "/>
  {#if desc}
  <div class="ml-4 flex flex-col justify-between pr-2 break-words">
    <p class="md:text-3xl text-2xl mt-2">{time.event}</p>
    <p class="md:text-xl text-lg mt-1.5 mb-2 break-words">{time.event_description}</p>
  </div>
  {/if}
</div>
