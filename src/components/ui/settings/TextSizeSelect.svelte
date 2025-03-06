<script lang="ts">
	let {
		textSizeMultiplier = $bindable(),
	}: {
		textSizeMultiplier: number
	} = $props()
</script>

<div>
	<button
		class="minimum"
		aria-label="Définir à la taille minimum"
		onclick={() => (textSizeMultiplier = 0.8)}
	>
		Aa
	</button>
	<button
		class="medium"
		aria-label="Définir à la taille moyenne"
		onclick={() => (textSizeMultiplier = 1)}
	>
		Aa
	</button>
	<button
		class="maximum"
		aria-label="Définir à la taille maximum"
		onclick={() => (textSizeMultiplier = 1.4)}
	>
		Aa
	</button>
</div>

<style lang="scss">
	button {
		background-color: transparent;
		border: none;
		color: inherit;
		font-size: 1rem;
	}
	.minimum {
		font-size: 0.8rem;
	}
	.medium {
		font-size: 1rem;
	}
	.maximum {
		font-size: 1.4rem;
	}
</style>
