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
	import DefaultLoader from "../skeleton/DefaultLoader.svelte"

	const {
		chapter,
		colors,
		onSubmit,
	}: {
		storyUid: string
		chapter: Chapter
		colors: [string, string]
		/**
		 * onSubmit is called when the user submits the form.
		 * The Promise are resolved when the vote are accepted or refused by the server.
		 * If the vote is refused, the promise are false, else, its true.
		 */
		onSubmit: (vote: Promise<boolean>) => void
	} = $props()

	let userVote = $state<string | null>(null)
	$effect(() => {
		submitDisabled = userVote === null
	})
	let waitForSubmit = $state<boolean>(false)
	let submitDisabled = $state<boolean>(true)

	let sendButtonText = $state("S’abonner pour voter")
	void (async () => {
		switch (await $currentUser?.get("subscriptionPlan")) {
			case SubscriptionPlans.Free: {
				sendButtonText = "S’abonner pour voter"
				break
			}
			case SubscriptionPlans.Interactif:
			case SubscriptionPlans.Immersif: {
				sendButtonText = "Voter"
				break
			}
			default: {
				sendButtonText = "Créer un compte pour voter"
				break
			}
		}
	})()

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
				// @todo vote in API
				waitForSubmit = true
				const APIResult = new Promise<boolean>(resolve =>
					setTimeout(() => {
						resolve(true)
					}, 350),
				)
				onSubmit(APIResult)
				await APIResult
				waitForSubmit = false
				break
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
	{#if waitForSubmit}
		<DefaultLoader color={colors[0]} noMargin={true} />
	{:else}
		<input
			use:touchHandlers
			type="submit"
			value={sendButtonText}
			disabled={submitDisabled}
			class:disabled={submitDisabled}
		/>
	{/if}
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
		background-color: var(--background-color);
		&:disabled {
			opacity: 0.2;
			cursor: not-allowed;
		}
	}
</style>
