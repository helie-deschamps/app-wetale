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
</script>

<label use:touchHandlers class:selected={userVote === voteId}>
	{choiceText}
	<input type="radio" name="poll" value={voteId} bind:group={userVote} />
</label>

<style lang="scss">
	label {
		padding: 19px 2em;
		text-align: center;
		border-radius: 16px;
		outline: #000000 solid 2px;
		box-sizing: border-box;
		font-weight: 700;
		&:hover {
			cursor: pointer;
		}
	}
	.selected {
		background-color: #87801F;
		color: white;
    outline: none;
	}
	input {
		display: none;
	}
</style>
