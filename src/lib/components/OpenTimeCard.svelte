<script lang="ts">
	import type { Times } from '$lib/Types';

	export let time: Times;

	function shortDate(date: string) {
		let d = new Date(date);
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'short',
			day: 'numeric',
			month: 'long'
		};
		const formattedDate = d.toLocaleDateString('de-DE', options);
		console.log(formattedDate);
		return formattedDate;
	}
</script>

<div class="card w-28 mx-1 p-2"><p>{shortDate(time.from)}</p></div>
