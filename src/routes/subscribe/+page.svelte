<script lang="ts">
	import Steps from "../../components/ui/Steps/Steps.svelte"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import PriceTile from "../../components/ui/subscribe/PriceTile.svelte"
	import { ask, message } from "@tauri-apps/plugin-dialog"
	import DefaultLoader from "../../components/ui/skeleton/DefaultLoader.svelte"

	let currentStep = $state(0)

	let pricingFormula = $state<"INTERACTIVE" | "IMMERSIVE" | undefined>()
	const startPayment = async () => {
		if (pricingFormula) {
			currentStep = 1

			const answer = await ask("Cette popup émule un achat in app", {
				title: "Payer 12€",
				kind: "info",
				okLabel: "Payer",
				cancelLabel: "Annuler",
			})

			if (answer) paymentGranted()
			else {
				void message("Votre payment à échoué", {
					title: "Payment échoué",
					kind: "error",
				})
				currentStep = 0
			}
		}
	}
	const paymentGranted = () => {
		currentStep = 2
	}
</script>

<ClassicPageWrapper>
	<Steps {currentStep} steps={["Choix", "Payment", "Résumé"]} />
	{#if currentStep === 0}
		<h2>Choisis son abonnement</h2>
		<PriceTile
			onTap={() => {
				pricingFormula = "INTERACTIVE"
				void startPayment()
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
				pricingFormula = "IMMERSIVE"
				void startPayment()
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
