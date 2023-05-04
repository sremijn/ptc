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

	export let link = '';
</script>

{#if link != ''}
	<a href={link} class="{color} {size}">
		<slot />
	</a>
{:else}
	<button on:click={clickEvent} class="{color} {size}" {disabled}>
		<slot />
	</button>
{/if}

<style>
	button,
	a {
		padding: 8px 24px;
		border: 2px solid black;
		color: black;

		font-weight: bold;
		text-decoration: none;

		outline-offset: 1px;
		outline: 2px solid transparent;

		transition-property: box-shadow, background-color, outline-color, opacity;
		transition-duration: 0.15s;
		transition-timing-function: ease-out;
	}
	button:not(:disabled),
	a {
		cursor: pointer;
	}

	button:disabled {
		background-color: transparent;
		opacity: 0.5;
	}

	button.small,
	a.small {
		font-size: 1rem;
	}

	button.large,
	a.large {
		font-size: 1.5rem;
	}

	button:hover:not(:disabled),
	a.hover {
		box-shadow: inset 0 0 0 2px black;
	}

	button:focus-visible,
	a:focus-visible {
		outline: 2px solid black;
	}

	button:active:not(:disabled),
	button.purple:active:not(:disabled),
	button.pink:active:not(:disabled),
	button.yellow:active:not(:disabled),
	button.green:active:not(:disabled),
	button.red:active:not(:disabled),
	button.light:active:not(:disabled),
	a:active:not(:disabled),
	a.purple:active:not(:disabled),
	a.pink:active:not(:disabled),
	a.yellow:active:not(:disabled),
	a.green:active:not(:disabled),
	a.red:active:not(:disabled),
	a.light:active:not(:disabled) {
		background-color: black;
		box-shadow: inset 0 0 0 10px black;
	}

	button.purple,
	a.purple {
		background-color: var(--color-purple);
	}
	button.purple:active:not(:disabled),
	a.purple:active {
		color: var(--color-purple);
	}

	button.pink,
	a.pink {
		background-color: var(--color-pink);
	}
	button.pink:active:not(:disabled),
	a.pink:active {
		color: var(--color-pink);
	}

	button.yellow,
	a.yellow {
		background-color: var(--color-yellow);
	}
	button.yellow:active:not(:disabled),
	a.yellow:active {
		color: var(--color-yellow);
	}

	button.green,
	a.green {
		background-color: var(--color-green);
	}
	button.green:active:not(:disabled),
	a.green:active {
		color: var(--color-green);
	}

	button.red,
	a.red {
		background-color: var(--color-red);
	}
	button.red:active:not(:disabled),
	a.red:active {
		color: var(--color-red);
	}

	button.light,
	a.light {
		background-color: white;
	}
	button.light:active:not(:disabled),
	a.light:active {
		color: white;
	}
</style>
