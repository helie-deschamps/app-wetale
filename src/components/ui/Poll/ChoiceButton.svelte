<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"

	var {
		voteId,
		choiceText,
		userVote = $bindable(),
		colors,
	}: {
		voteId: string
		choiceText: string
		userVote: string | null
		colors: [string, string]
	} = $props()

	let buttonWidth: number | undefined = $state()
	let selectedLayer: HTMLSpanElement | undefined = $state()

	$effect(() => {
		if (!(userVote === voteId) && selectedLayer) {
			selectedLayer.style.transition = "clip-path 0.4s ease-in-out"
			selectedLayer.style.clipPath = `ellipse(0 0 at 50% 50%)`
		}
	})
	const startAnimate = (fingerPosition: { x: string; y: string }) => {
		if (!selectedLayer) return
		selectedLayer.style.transition = "none"
		selectedLayer.style.clipPath = `ellipse(0 0 at ${fingerPosition.x} ${fingerPosition.y})`
		requestAnimationFrame(
			((selectedLayer: HTMLSpanElement) => {
				selectedLayer.style.transition = "clip-path 0.4s ease-in-out"
				selectedLayer.style.clipPath = `ellipse(var(--button-width) var(--button-width) at ${fingerPosition.x} ${fingerPosition.y})`
			}).bind(null, selectedLayer),
		)
	}
</script>

<button
	type="button"
	use:touchHandlers
	class:selected={userVote === voteId}
	style="--text: '{choiceText}'; --button-width: {buttonWidth}px;"
	bind:offsetWidth={buttonWidth}
	onclick={error => {
		if (userVote === voteId) return
		userVote = voteId
		startAnimate({
			x: `${String(error.offsetX)}px`,
			y: `${String(error.offsetY)}px`,
		})
	}}
>
	{choiceText}
	<input type="radio" name="poll" value={voteId} bind:group={userVote} />
	<span
		bind:this={selectedLayer}
		class:selectedLayer={true}
		style:background-color={colors[0]}
		style:color={colors[1]}>{choiceText}</span
	>
</button>

<style lang="scss">
	button {
		position: relative;
		padding: 19px 2em;
		text-align: center;
		border-radius: 16px;
		outline: var(--text-color) solid 2px;
		color: var(--text-color);
		font-weight: 700;
		border: none;
		background-color: var(--background-color);
		&:hover {
			cursor: pointer;
		}
		.selectedLayer {
			clip-path: ellipse(0 0 at 50% 50%);
			//transition: clip-path 0.4s ease-in-out;
			border-radius: 16px;
			box-sizing: border-box;
			font-weight: 700;
			background-color: var(--text-color);
			color: white;
			outline: none;
			position: absolute;
			top: -2px;
			left: -2px;
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			display: flex;
			justify-content: center;
			align-items: center;
			pointer-events: none;
		}
	}
	input {
		display: none;
	}
</style>
