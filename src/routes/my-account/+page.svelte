<script lang="ts">
	import SectionTitle from "../../components/ui/sections/SectionTitle.svelte"
	import {
		currentUser,
		disconnectCurrentUser,
	} from "../../utils/stores/currentUser.js"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import { goto } from "$app/navigation"
	import { SubscriptionPlans } from "../../utils/enums/SubscriptionPlans"
	import PriceTile from "../../components/ui/subscribe/PriceTile.svelte"

	let email = $state("")
	let username = $state("")
	let subscriptionPlan = $state<SubscriptionPlans | undefined>()
	let password = $state("......")

	void (async () => {
		email = (await $currentUser?.get("eMail")) ?? ""
		username = (await $currentUser?.get("username")) ?? ""
		subscriptionPlan = (await $currentUser?.get(
			"subscriptionPlan",
		)) as SubscriptionPlans
	})()
	function disconnect() {
		void disconnectCurrentUser().then(() => goto("/login"))
	}
</script>

<ClassicPageWrapper>
	<section>
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
	</section>
	{#if subscriptionPlan || subscriptionPlan === SubscriptionPlans.Free}
		<section>
			<SectionTitle text="Votre Abonnement" />
			<PriceTile
				onTap={() => {}}
				color="#7C1430"
				textColor="white"
				markerColor="#E94F1D"
				title="Interactif"
				argues={[
					"Possibilité de voter",
					"Accès aux chapitres quotidiens",
					"Expérience communautaire",
					"Accès aux nombreuses fonctionnalités (favoris, bibliothèque..)",
				]}
				withButton={subscriptionPlan !== SubscriptionPlans.Interactif}
			/>
			<PriceTile
				onTap={() => {}}
				color="#F8BE3F"
				textColor="black"
				markerColor="white"
				title="Immersif"
				argues={[
					"Voter pour influencer l’histoire",
					"Écouter les récits",
					"Accès aux chapitres quotidiens",
					"Accès aux nombreuses fonctionnalités (favoris, bibliothèque..)",
					"Expérience communautaire",
				]}
				withButton={subscriptionPlan !== SubscriptionPlans.Immersif}
			/>
			<p>
				Les abonnements étant pris par période d’un mois, le résiliement de
				votre abonnement lui donnera fin au premier du mois suivant.
			</p>
		</section>
	{/if}
</ClassicPageWrapper>

<style lang="scss" global>
	section:not(:last-child) {
		margin-bottom: 2rem;
	}
</style>
