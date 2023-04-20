<script>
	export let answer = true;
</script>

<div class="wrapper {answer ? 'correct' : 'incorrect'}">
	{#if answer}
		<h1>Good job!</h1>
		<p>You get another point</p>
	{:else}
		<h1>Not quite...</h1>
		<p>No new points for you</p>
	{/if}
</div>

<style>
	.wrapper {
		position: fixed;
		inset: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.wrapper.correct {
		background-color: var(--color-green);
	}
</style>
