<script>
	import { createEventDispatcher } from 'svelte';

	import Card from './card.svelte';

	import Score from './score.svelte';
	import Clock from './clock.svelte';

	const eventOut = createEventDispatcher();

	function timesUp() {
		eventOut('timesUp');
	}

	export let score = 0;
	export let seconds = 0;
</script>

<Card>
	<div>
		<Score {score} />
		<Clock {seconds} on:timesUp={timesUp} />
	</div>
</Card>

<style>
	div {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
