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
		class:selected={textSizeMultiplier === 0.8}
		aria-label="Définir à la taille minimum"
		onclick={() => (textSizeMultiplier = 0.8)}
	>
		Aa
	</button>
	<button
		class="medium"
		class:selected={textSizeMultiplier === 1}
		aria-label="Définir à la taille moyenne"
		onclick={() => (textSizeMultiplier = 1)}
	>
		Aa
	</button>
	<button
		class="maximum"
		class:selected={textSizeMultiplier === 1.4}
		aria-label="Définir à la taille maximum"
		onclick={() => (textSizeMultiplier = 1.4)}
	>
		Aa
	</button>
</div>

<style lang="scss">
	@use "/src/styles/variables/colors";

	button {
		background-color: transparent;
		border: none;
		color: inherit;
		font-size: 1rem;
		border-radius: 6px;
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
	.selected {
		background-color: colors.$main-light;
		color: colors.$main-dark;
	}
</style>
