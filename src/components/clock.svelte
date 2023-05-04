<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { seconds, questionIndex } from '../routes/stats';
	import { questions } from '../routes/questions';

	const eventOut = createEventDispatcher();

	const timer = setInterval(() => {
		if ($seconds <= 0) {
			clearInterval(timer);
			eventOut('timesUp');

			return;
		}

		$seconds--;
	}, 1000);

	onMount(() => {
		$seconds = questions[$questionIndex].time;
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<p style="font-size: 2rem; margin: 0;">
	Time: <b>{$seconds} second{$seconds != 1 ? 's' : ''}</b>
</p>
