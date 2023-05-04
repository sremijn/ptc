<div class="background" />
<div class="content">
	<slot />
</div>

<style>
	.content {
		position: relative;
		display: flex;
		height: 100%;
	}
	.background {
		position: absolute;
		inset: 0;
		background-color: var(--color-purple);
	}
</style>
