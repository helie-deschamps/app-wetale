<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"

	var {
		voteId,
		choiceText,
		userVote = $bindable(),
	}: {
		voteId: string
		choiceText: string
		userVote: string | null
	} = $props()

	let buttonWidth = $state()
</script>

<label
	use:touchHandlers
	class:selected={userVote === voteId}
	style="--text: '{choiceText}'; --button-width: {buttonWidth}px;"
	bind:offsetWidth={buttonWidth}
>
	{choiceText}
	<input type="radio" name="poll" value={voteId} bind:group={userVote} />
</label>

<style lang="scss">
	label {
		position: relative;
		padding: 19px 2em;
		text-align: center;
		border-radius: 16px;
		outline: #000000 solid 2px;
		//box-sizing: border-box;
		font-weight: 700;
		overflow: hidden;
		&:hover {
			cursor: pointer;
		}
		&:after {
			clip-path: ellipse(0 0 at 50% 50%);
			transition: clip-path 0.4s ease-in-out;
			content: var(--text);
			box-sizing: border-box;
			font-weight: 700;
			background-color: #87801f;
			color: white;
			outline: none;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			pointer-events: none;
		}
	}
	.selected {
		outline: none;
		&:after {
			clip-path: ellipse(var(--button-width) var(--button-width) at 50% 50%);
		}
	}
	input {
		display: none;
	}
</style>
