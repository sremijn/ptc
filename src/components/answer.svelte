<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';

	const eventOut = createEventDispatcher();

	function clickEvent() {
		eventOut('click');
	}

	export let isCorrect = true;
	export let outOfTime = false;
	export let isLast = false;
</script>

<div class="wrapper {isCorrect ? 'correct' : 'incorrect'}">
	{#if isCorrect}
		<h1>Good job!</h1>
		<p>You get another point</p>
	{:else if outOfTime}
		<h1>Out of time!</h1>
		<p>No new points for you</p>
	{:else}
		<h1>Not quite...</h1>
		<p>No new points for you</p>
	{/if}

	<Button color={isCorrect ? 'green' : 'red'} on:click={clickEvent}>
		{isLast ? 'View Results' : 'Next Question'}
	</Button>
</div>

<style>
	h1,
	p {
		margin: 0;
	}

	p {
		font-size: 1.5em;
	}

	.wrapper {
		position: fixed;
		inset: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 32px;
	}

	.wrapper.correct {
		background-color: var(--color-green);
	}

	.wrapper.incorrect {
		background-color: var(--color-red);
	}
</style>
