<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"

	var {
		color,
		textColor,
		markerColor,
		title,
		argues,
		onTap,
	}: {
		color: string
		textColor: string
		markerColor: string
		title: string
		argues: string[]
		onTap: () => void
	} = $props()

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Enter" || event.key === " ") {
			onTap()
		}
	}
</script>

<div
	role="button"
	tabindex="0"
	onkeydown={handleKeydown}
	onclick={onTap}
	use:touchHandlers
	style:background-color={color}
	style:color={textColor}
	style:--marker-color={markerColor}
>
	<h2>{title}</h2>
	<ul>
		{#each argues as argue, index (index)}
			<li>
				{argue}
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	div {
		padding: 24px 20px;
		border-radius: 16px;
		margin-bottom: 16px;
		&:hover {
			cursor: pointer;
		}
		&:focus, &:focus-visible {
			outline-color: var(--marker-color);
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
</style>
