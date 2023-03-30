<script>
	export let answer = true;
</script>

{#if answer}
	<p style="color: green;">Good job!</p>
{:else}
	<p style="color: red;">Not quite...</p>
{/if}
