<script>
	import { questions } from '../routes/questions';
	import { questionIndex } from '../routes/stats';

	import QuestionOption from './question-option.svelte';

	/** @type { number? } */
	export let selected = null;
</script>

<div>
	<p>
		{$questionIndex + 1}.
		{questions[$questionIndex].question}
	</p>

	<div class="answer-group">
		{#each questions[$questionIndex].answers as answer, index}
			<QuestionOption
				letter={['a', 'b', 'c', 'd'][index]}
				text={answer}
				selected={selected == index}
				on:clicked={() =>
					selected == index ? (selected = null) : (selected = index)}
			/>
		{/each}
	</div>
</div>

<style>
	p {
		font-size: 1.5rem;
		margin-top: 0;
	}
	.answer-group {
		display: grid;
		gap: 24px;
	}
</style>
