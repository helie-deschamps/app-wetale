<script lang="ts">
	import SectionTitle from "../../components/ui/sections/SectionTitle.svelte"
	import { currentUser, disconnectCurrentUser } from "../../utils/stores/currentUser.js"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import { goto } from "$app/navigation"
	import { SubscriptionPlans } from "../../utils/enums/SubscriptionPlans"

	let email = $state("")
	let username = $state("")
	let subscriptionPlan = $state<SubscriptionPlans | undefined>()
	let password = $state("......")

	void (async () => {
		email = (await $currentUser?.get("eMail")) ?? ""
		username = (await $currentUser?.get("username")) ?? ""
		subscriptionPlan = (await $currentUser?.get("subscriptionPlan")) as SubscriptionPlans
	})()
	function disconnect () {
		void disconnectCurrentUser().then(()=>goto("/login"))
	}
</script>

<ClassicPageWrapper>
	<SectionTitle text="Mon compte" />
	<button onclick={disconnect}>Se déconnecter</button>
	<div></div>
	<label>
		<span>Pseudonyme</span>
		<input type="text" bind:value={username} />
	</label>
	<label>
		<span>Adresse mail</span>
		<input type="email" bind:value={email} />
	</label>
	<label>
		<span>Mot de passe</span>
		<input type="password" bind:value={password} />
	</label>
	{#if subscriptionPlan || subscriptionPlan === SubscriptionPlans.Free }
	<SectionTitle text="Votre Abonnement" />
	{subscriptionPlan}
	{/if}
</ClassicPageWrapper>
