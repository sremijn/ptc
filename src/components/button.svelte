<script>
	import { createEventDispatcher } from 'svelte';

	const eventOut = createEventDispatcher();

	function clickEvent() {
		eventOut('click');
	}

	/** @type { 'purple' | 'pink' | 'yellow' | 'green' | 'red' | 'light' } */
	export let color = 'light';

	/** @type { 'small' | 'large' } */
	export let size = 'small';

	export let disabled = false;
</script>

<button on:click={clickEvent} class="{color} {size}" {disabled}>
	<slot />
</button>

<style>
	button {
		padding: 8px 24px;
		border: 2px solid black;
		color: black;

		font-weight: bold;

		outline-offset: 1px;
		outline: 2px solid transparent;

		transition-property: box-shadow, background-color, outline-color, opacity;
		transition-duration: 0.15s;
		transition-timing-function: ease-out;
	}
	button:not(:disabled) {
		cursor: pointer;
	}

	button:disabled {
		background-color: transparent;
		opacity: 0.5;
	}

	button.small {
		font-size: 1rem;
	}

	button.large {
		font-size: 1.5rem;
	}

	button:hover:not(:disabled) {
		box-shadow: inset 0 0 0 2px black;
	}

	button:focus-visible {
		outline: 2px solid black;
	}

	button:active:not(:disabled),
	button.purple:active:not(:disabled),
	button.pink:active:not(:disabled),
	button.yellow:active:not(:disabled),
	button.green:active:not(:disabled),
	button.red:active:not(:disabled),
	button.light:active:not(:disabled) {
		background-color: black;
		box-shadow: inset 0 0 0 10px black;
	}

	button.purple {
		background-color: var(--color-purple);
	}
	button.purple:active:not(:disabled) {
		color: var(--color-purple);
	}

	button.pink {
		background-color: var(--color-pink);
	}
	button.pink:active:not(:disabled) {
		color: var(--color-pink);
	}

	button.yellow {
		background-color: var(--color-yellow);
	}
	button.yellow:active:not(:disabled) {
		color: var(--color-yellow);
	}

	button.green {
		background-color: var(--color-green);
	}
	button.green:active:not(:disabled) {
		color: var(--color-green);
	}

	button.red {
		background-color: var(--color-red);
	}
	button.red:active:not(:disabled) {
		color: var(--color-red);
	}

	button.light {
		background-color: white;
	}
	button.light:active:not(:disabled) {
		color: white;
	}
</style>
