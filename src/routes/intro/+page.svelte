<script>
	import Button from '../../components/button.svelte';
	import Card from '../../components/card.svelte';

	import { questions } from '../questions';
</script>

<div class="layout">
	<div class="layout-inner">
		<Card>
			<h1>Welcome to the quiz!</h1>
			<p>
				There will be {questions.length} questions. For each question that you get
				right, you get a point.
				<br />
				<u>Answer each question before the time runs out.</u>
				<br />
				<br />
				See if you can get the highest score!
			</p>
		</Card>
		<div class="button-wrapper">
			<Button link="/question" size="large">Start Quiz</Button>
		</div>
	</div>
</div>

<style>
	.layout {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;

		display: grid;
		align-items: center;
	}
	.layout-inner {
		display: grid;
		grid-template-rows: 1fr auto;
		gap: 16px;
	}
	.button-wrapper {
		display: flex;
		justify-content: center;
	}
</style>
