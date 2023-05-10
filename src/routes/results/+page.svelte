<script>
	import { score } from '../stats';

	import Button from '../../components/button.svelte';
	import Card from '../../components/card.svelte';
</script>

<div class="layout">
	<div class="layout-inner">
		<Card>
			<h1>You got a total of {$score} points!</h1>
		</Card>
		<div class="button-wrapper">
			<Button link="/intro" size="large">Quit</Button>
			<Button link="/question" size="large">Restart</Button>
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
		gap: 32px;
	}
</style>
