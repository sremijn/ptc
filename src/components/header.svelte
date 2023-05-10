<script>
	import { createEventDispatcher } from 'svelte';

	import Card from './card.svelte';

	import Score from './score.svelte';
	import Clock from './clock.svelte';

	const eventOut = createEventDispatcher();

	function timesUp() {
		eventOut('timesUp');
	}
</script>

<Card>
	<div>
		<Score />
		<Clock on:timesUp={timesUp} />
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
