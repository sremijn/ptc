<script>
	import Question from '../components/question.svelte';
	import Answer from '../components/answer.svelte';
	import Button from '../components/button.svelte';

	let showAnswer = false;

	/** @type {number?} */
	let selectedAnswer = null;
	let correctAnswer = 3;
</script>

<div class="question">
	<Question
		number={1}
		answers={['16', '12', '4', '0']}
		bind:selected={selectedAnswer}
	>
		OneOne was one racehorse, TwoTwo was one too. OneOne won one race, TwoTwo
		won one too.
		<br />
		<br />
		<b>How many numbers are there in all?</b>
	</Question>

	<div class="button-wrapper">
		<Button
			on:click={() => (showAnswer = true)}
			size="large"
			disabled={selectedAnswer == null}
		>
			Submit
		</Button>
	</div>
</div>

{#if showAnswer}
	<Answer
		isCorrect={selectedAnswer == correctAnswer}
		on:click={() => {
			showAnswer = false;
			selectedAnswer = null;
		}}
	/>
{/if}

<style>
	.question {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 24px;
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
