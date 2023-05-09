<script>
	import { score } from '../routes/stats';
</script>

<p style="font-size: 2rem; margin: 0">
	Score: <b>{$score} point{$score != 1 ? 's' : ''}</b>
</p>
