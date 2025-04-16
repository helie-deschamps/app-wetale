<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"
	import type { Chapter } from "../../../utils/types/Chapter"
	import ChoiceButton from "./ChoiceButton.svelte"
	import {
		currentUser,
		isUserConnected,
	} from "../../../utils/stores/currentUser"
	import { SubscriptionPlans } from "../../../utils/enums/SubscriptionPlans"
	import { goto } from "$app/navigation"

	const {
		chapter,
		colors,
	}: {
		storyUid: string
		chapter: Chapter
		colors: [string, string]
	} = $props()

	let userVote = $state<string | null>(null)

	async function vote(event: SubmitEvent) {
		event.preventDefault()

		if (!$isUserConnected) return goto("/login")

		switch (
			(await $currentUser?.get("subscriptionPlan")) as SubscriptionPlans
		) {
			case SubscriptionPlans.Free: {
				return goto("/subscribe")
			}
			case SubscriptionPlans.Immersif:
			case SubscriptionPlans.Interactif: {
				// @todo vote
				return
			}
		}
	}
</script>

<form onsubmit={vote}>
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
		border: var(--text-color) solid 2px;
		color: var(--text-color);
		box-sizing: border-box;
		align-self: center;
    font-weight: 700;
    background-color:  var(--background-color);
	}
</style>
