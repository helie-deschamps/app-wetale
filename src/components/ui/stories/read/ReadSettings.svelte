<script lang="ts">
	import { slide } from "svelte/transition"
	import TextSizeSelect from "../../settings/TextSizeSelect.svelte"

	let {
		textSizeMultiplier = $bindable(),
		darkTheme = $bindable(),
		font = $bindable(),
		interlignes = $bindable(),
		isOpen = $bindable(),
		headerHeight,
	}: {
		textSizeMultiplier: number
		darkTheme: boolean
		font: "Inter" | "Comic Neue" | "Default"
		interlignes: number
		isOpen: boolean
		headerHeight: number
	} = $props()
</script>

{#if isOpen}
	<div
		class="container"
		in:slide={{ axis: "y" }}
		out:slide={{ axis: "y" }}
		style="padding-top: {32 + headerHeight}px"
	>
		<div class="row">
			<h4>Taille de police</h4>
			<TextSizeSelect bind:textSizeMultiplier />
		</div>
		<div class="row">
			<h4>Thème</h4>
			<label class:selected={!darkTheme}>
				Thème clair
				<input
					type="radio"
					name="scoops"
					value={false}
					bind:group={darkTheme}
				/>
			</label>
			<label class:selected={darkTheme}>
				Thème sombre
				<input type="radio" name="scoops" value={true} bind:group={darkTheme} />
			</label>
		</div>
		<div class="row">
			<h4>Police</h4>
		</div>
	</div>
{/if}

<style lang="scss">
	@use "/src/styles/variables/colors";

	.container {
		padding: 0 30px 30px 32px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: colors.$main-dark;
		color: white;
		z-index: 1500;
		display: flex;
		gap: 16px;
		flex-direction: column;
	}
	.row {
		display: flex;
		justify-content: start;
		gap: 1em;
		align-items: end;
		width: calc(100% - 60px);
	}
	label {
		cursor: pointer;
		border: #f7f0e6 2px solid;
		border-radius: 6px;
		padding: 0.3em 0.7em;
		font-weight: bold;
		font-size: 0.9em;
		&.selected {
			background-color: #f7f0e6;
			color: #1a191d;
		}
	}
	input {
		display: none;
	}
</style>
