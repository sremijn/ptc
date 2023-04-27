<script>
	import { questions } from './questions';
	import { fade } from 'svelte/transition';

	import Header from '../components/header.svelte';

	import Question from '../components/question.svelte';
	import Answer from '../components/answer.svelte';
	import Button from '../components/button.svelte';
	import Card from '../components/card.svelte';

	/** @type {number?} */
	let selectedAnswer = null;
	let showAnswer = false;
	let questionNumber = 0;

	let score = 0;
	let seconds = questions[questionNumber].time;

	let isCorrect = false;

	let timesUp = false;

	function nextQuestion() {
		showAnswer = false;
		questionNumber++;

		if (questions.length <= questionNumber) {
			questionNumber = 0;
			return;
		}

		seconds = questions[questionNumber].time;
	}

	function submitQuestion() {
		timesUp = false;
		showAnswer = true;
		isCorrect = selectedAnswer == questions[questionNumber].correct;

		if (isCorrect) score++;

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
		<Header {score} {seconds} on:timesUp={outOfTime} />

		<Card>
			<div class="question">
				<Question
					number={questionNumber + 1}
					answers={questions[questionNumber].answers}
					bind:selected={selectedAnswer}
				>
					{questions[questionNumber].question}
				</Question>

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
	<div transition:fade>
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
