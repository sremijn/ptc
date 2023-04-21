<script>
	import QuestionOption from './question-option.svelte';

	export let number = 1;

	/** @type { [string, string] | [string, string, string] | [string, string, string, string] } */
	export let answers = ['', ''];

	/** @type { number? } */
	export let selected = null;
</script>

<div>
	<p style="font-size: 1.5rem; margin-top: 0;">
		{number}.
		<slot />
	</p>

	<div class="answer-group">
		{#each answers as answer, index}
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
	.answer-group {
		display: grid;
		gap: 24px;
	}
</style>
