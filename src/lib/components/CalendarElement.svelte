<script lang="ts">
	import type { Times } from '$lib/Types';

	export let time: Times;

	const date: Date = new Date(time.from);
	const from: string = time.from.slice(11, 16);
	const to: string = time.to.slice(11, 16);
	const weekday: string = date.toLocaleDateString('de-DE', { weekday: 'long' });
	const longdate: string = date.toLocaleDateString('de-DE', { day: 'numeric' });
	const fromtext: string = date.toLocaleDateString('de-DE', { hour: 'numeric' });
</script>

<div class="w-full border-b-2 border-surface-800 flex py-1.5 bg-primary-300">
  <div class="border-r-[1px] border-surface-800 shrink-0 w-[20rem] p-3 pb-1.5">
    <h2 class="h2 font-bold">{longdate}., {weekday}</h2>
    <h3 class="h3 mt-2">{from}-{to}</h3>
  </div>
  <div class="ml-3 flex flex-col justify-between ">
    <p class="text-3xl mt-2">{time.event}</p>
    <p class="text-xl mb-2">{time.event_description}</p>
  </div>
</div>
