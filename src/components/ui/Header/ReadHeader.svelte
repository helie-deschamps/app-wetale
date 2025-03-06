<script lang="ts">
	import BackButton from "./buttons/BackButton.svelte"
	import TextSizeSelect from "../settings/TextSizeSelect.svelte"

	let {
		height = $bindable(),
		textSizeMultiplier = $bindable(),
	}: {
		height: number
		textSizeMultiplier: number
	} = $props()
</script>

<header bind:offsetHeight={height}>
	<BackButton />
	<TextSizeSelect bind:textSizeMultiplier />
</header>

<style lang="scss">
	@use "/src/styles/variables/colors";

	header {
		z-index: 1000;
		position: absolute;
		width: calc(100% - 68px);
		background-color: colors.$main-dark;
		margin: 16px 14px 0;
		border-radius: 16px;
		padding: 11px 20px 11px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view-transition-name: header;
		color: colors.$main-light;
	}
	:global(::view-transition-group(header)) {
		z-index: 1000;
	}
</style>
