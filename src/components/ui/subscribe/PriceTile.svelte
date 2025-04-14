<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"

	var {
		color,
		textColor,
		markerColor,
		title,
		argues,
		onTap,
		withButton = false,
	}: {
		color: string
		textColor: string
		markerColor: string
		title: string
		argues: string[]
		onTap: () => void
		withButton?: boolean
	} = $props()

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Enter" || event.key === " ") {
			onTap()
		}
	}
</script>

<div
	class={withButton ? "with-swap-button" : ""}
	role="button"
	tabindex="0"
	onkeydown={handleKeydown}
	onclick={onTap}
	use:touchHandlers
	style:background-color={withButton ? "" : color}
	style:color={withButton ? "black" : textColor}
	style:--marker-color={withButton ? "black" : markerColor}
>
	<h2>{title}</h2>
	<ul>
		{#each argues as argue, index (index)}
			<li>
				{argue}
			</li>
		{/each}
	</ul>
	{#if withButton}
		<button class:swap-button={true}> Changer d’abonnement </button>
	{/if}
</div>

<style lang="scss">
	div {
		padding: 24px 20px;
		border-radius: 16px;
		margin-bottom: 16px;
		&:hover {
			cursor: pointer;
		}
		&:focus,
		&:focus-visible {
			outline-color: var(--marker-color);
		}
		&.with-swap-button {
			border: 3px solid black;
		}
	}
	h2 {
		margin-bottom: 0.4em;
		font-weight: 900;
	}
	ul {
		padding-inline-start: 1.6em;
		line-height: 1.2em;
		font-weight: 600;
	}
	li::marker {
		color: var(--marker-color);
		font-size: 1.6em;
	}
	.swap-button {
		background-color: black;
		color: white;
		border-radius: 8px;
		padding: 0.55em 16px;
		font-weight: 800;
		font-size: 1.2em;
		text-transform: uppercase;
		display: block;
		width: 100%;
		border: none;
		cursor: pointer;
		margin-top: 1em;
	}
</style>
