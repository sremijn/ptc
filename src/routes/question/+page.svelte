<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import { questions } from '../questions';
	import { score, questionIndex } from '../stats';

	import Header from '../../components/header.svelte';

	import Question from '../../components/question.svelte';
	import Answer from '../../components/answer.svelte';
	import Button from '../../components/button.svelte';
	import Card from '../../components/card.svelte';

	/** @type {number?} */
	let selectedAnswer = null;
	let showAnswer = false;
	let isCorrect = false;
	let timesUp = false;

	onMount(() => {
		$score = 0;
	});

	function nextQuestion() {
		showAnswer = false;
		$questionIndex++;

		if (questions.length <= $questionIndex) {
			$questionIndex = 0;
			goto('/results');
			return;
		}
	}

	function submitQuestion() {
		timesUp = false;
		showAnswer = true;
		isCorrect = selectedAnswer == questions[$questionIndex].correct;

		if (isCorrect) $score++;

		selectedAnswer = null;
	}

	function outOfTime() {
		showAnswer = true;
		isCorrect = false;
		timesUp = true;

		selectedAnswer = null;
	}
</script>

{#if !showAnswer}
	<div class="layout">
		<Header on:timesUp={outOfTime} />

		<Card>
			<div class="question">
				<Question bind:selected={selectedAnswer} />

				<div class="button-wrapper">
					<Button
						on:click={submitQuestion}
						size="large"
						disabled={selectedAnswer == null}
					>
						Submit
					</Button>
				</div>
			</div>
		</Card>
	</div>
{/if}

{#if showAnswer}
	<div transition:fade={{ duration: 150 }}>
		<Answer {isCorrect} outOfTime={timesUp} on:click={nextQuestion} />
	</div>
{/if}

<style>
	.layout {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;

		display: grid;
		grid-template-rows: auto 1fr;
		align-items: center;

		position: relative;

		height: 100%;
	}

	.question {
		display: grid;
		gap: 24px;
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
