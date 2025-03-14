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
		font: "'Inter'" | "'Comic Neue'" | "system-ui"
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
		<div class="column font_select">
			<h4>Police</h4>
			<div style:--font="'Inter'">
				<label class:selected={font === "'Inter'"}>
					Inter
					<input type="radio" name="scoops" value="'Inter'" bind:group={font} />
				</label>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et enim
					mauris. Morbi risus eros, ullamcorper in iaculis.
				</p>
			</div>
			<div style:--font="'Comic Neue'">
				<label class:selected={font === "'Comic Neue'"}>
					Comic neue
					<input
						type="radio"
						name="scoops"
						value="'Comic Neue'"
						bind:group={font}
					/>
				</label>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et enim
					mauris. Morbi risus eros, ullamcorper in iaculis.
				</p>
			</div>
			<div style:--font="system-ui">
				<label class:selected={font === "system-ui"}>
					Par défaut (Android)
					<input
						type="radio"
						name="scoops"
						value="system-ui"
						bind:group={font}
					/>
				</label>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et enim
					mauris. Morbi risus eros, ullamcorper in iaculis.
				</p>
			</div>
		</div>
		<div class="row">
			<h4>Interlignes</h4>
			<label class:selected={interlignes === 100}>
				100%
				<input
					type="radio"
					name="scoops"
					value={100}
					bind:group={interlignes}
				/>
			</label>
			<label class:selected={interlignes === 142}>
				140%
				<input
					type="radio"
					name="scoops"
					value={142}
					bind:group={interlignes}
				/>
			</label>
			<label class:selected={interlignes === 180}>
				180%
				<input
					type="radio"
					name="scoops"
					value={180}
					bind:group={interlignes}
				/>
			</label>
		</div>
	</div>
{/if}

<style lang="scss">
	@use "/src/styles/variables/colors";

	.container {
		width: 100vw;
		box-sizing: border-box;
		padding: 0 30px 30px 32px;
		position: fixed;
		top: 0;
		left: 0;
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
		width: 100%;
		flex-wrap: wrap;
	}
	.column {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 100%;
	}
	label {
		cursor: pointer;
		border: #f7f0e6 2px solid;
		border-radius: 6px;
		padding: 0.3em 0.7em;
		font-weight: bold;
		font-size: 0.9em;
		width: max-content;
		white-space: nowrap;
		&.selected {
			background-color: #f7f0e6;
			color: #1a191d;
		}
	}
	input {
		display: none;
	}
	.font_select {
		h4 {
			margin-bottom: -6px;
		}
		label {
			display: block;
			margin-bottom: 2px;
		}
		p {
			font-family: var(--font, inherit), sans-serif;
		}
	}
</style>
