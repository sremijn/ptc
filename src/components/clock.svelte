<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const eventOut = createEventDispatcher();

	export let seconds = 10;

	const timer = setInterval(() => {
		if (seconds <= 0) {
			clearInterval(timer);
			eventOut('timesUp');

			return;
		}

		seconds--;
	}, 1000);

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<p style="font-size: 2rem; margin: 0;">
	Time: <b>{seconds} second{seconds != 1 ? 's' : ''}</b>
</p>
