<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"
	import type { Chapter } from "../../../utils/types/Chapter"
	import ChoiceButton from "./ChoiceButton.svelte"

	const {
		chapter,
		colors,
	}: {
		storyUid: string
		chapter: Chapter
		colors: [string, string]
	} = $props()

	let userVote = $state<string | null>(null)
</script>

<form>
	{#each chapter.poll.choices as choice (choice.id)}
		<ChoiceButton
			voteId={choice.id}
			choiceText={choice.text}
			bind:userVote
			{colors}
		/>
	{/each}
	<input use:touchHandlers type="submit" value="S’abonner pour voter" />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 16px;
		margin-top: 1em;
	}
	input {
		padding: 7px 46px;
		border-radius: 11px;
		border: #000000 solid 2px;
		box-sizing: border-box;
		align-self: center;
		background-color: transparent;
	}
</style>
