<script lang="ts">
	import Steps from "../../components/ui/Steps/Steps.svelte"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import PriceTile from "../../components/ui/subscribe/PriceTile.svelte"
	import { ask, message } from "@tauri-apps/plugin-dialog"
	import DefaultLoader from "../../components/ui/skeleton/DefaultLoader.svelte"
	import { SubscriptionPlans } from "../../utils/enums/SubscriptionPlans"
	import { currentUser } from "../../utils/stores/currentUser"
	import { get } from "svelte/store"
	import { goto } from "$app/navigation"

	let currentStep: number = $state<number>(0)

	;(async () => {
		if (await get(currentUser)?.get("subscriptionPlan")) void goto("/login")
	})()

	const startPayment = async (plan: SubscriptionPlans) => {
		if ((await get(currentUser)?.get("subscriptionPlan")) === plan) {
			void message("Vous avez déjà cet abonnement", {
				title: "Abonnement déjà actif",
				kind: "error",
			})
			return
		}
		let answer: boolean = false
		switch (plan) {
			case SubscriptionPlans.Immersif: {
				currentStep = 1
				answer = await ask(
					"Vous pouvez résilier à tout moment dans réglages de votre compte Google au moins un jour avant chaque date de renouvellement.\n" +
						"L’abonnement se renouvellera automatiquement jusqu’a sa résiliation.",
					{
						title: "Abonnement mensuel de 14,99€",
						kind: "info",
						okLabel: "Payer",
						cancelLabel: "Annuler",
					},
				)
				break
			}
			case SubscriptionPlans.Interactif: {
				currentStep = 1
				answer = await ask(
					"Vous pouvez résilier à tout moment dans réglages de votre compte Google au moins un jour avant chaque date de renouvellement.\n" +
						"L’abonnement se renouvellera automatiquement jusqu’a sa résiliation.",
					{
						title: "Abonnement mensuel de 29,99€",
						kind: "info",
						okLabel: "Payer",
						cancelLabel: "Annuler",
					},
				)
			}
		}

		if (answer) paymentGranted(plan)
		else {
			void message("Votre payment à échoué", {
				title: "Payment échoué",
				kind: "error",
			})
			currentStep = 0
		}
	}
	const paymentGranted = (plan: SubscriptionPlans) => {
		currentStep = 2
		void get(currentUser)?.set("subscriptionPlan", plan)
		void get(currentUser)?.save()
	}
</script>

<ClassicPageWrapper>
	<Steps {currentStep} steps={["Choix", "Payment", "Résumé"]} />
	{#if currentStep === 0}
		<h2>Choisis son abonnement</h2>
		<PriceTile
			onTap={() => {
				void startPayment(SubscriptionPlans.Interactif)
			}}
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
		/>
		<PriceTile
			onTap={() => {
				void startPayment(SubscriptionPlans.Immersif)
			}}
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
		/>
		<p>
			Les abonnements étant pris par période d’un mois, le résiliement de votre
			abonnement lui donnera fin au premier du mois suivant.
		</p>
	{:else if currentStep === 1}
		<DefaultLoader text="Paiement en cours" />
	{:else if currentStep === 2}
		<p>Votre payment de 12€ à bien réussi, votre compte à été augmenter</p>
	{/if}
</ClassicPageWrapper>

<style>
	h2 {
		font-size: 1.5rem;
		font-weight: 900;
		margin-bottom: 32px;
		margin-top: 53px;
	}
</style>
