<script lang="ts">
	import Steps from "../../components/ui/Steps/Steps.svelte"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import PriceTile from "../../components/ui/subscribe/PriceTile.svelte"

	let currentStep = $state(0)

	let pricingFormula = $state<"INTERACTIVE" | "IMMERSIVE" | undefined>()
	const startPayment = () => {
		if (pricingFormula) {
			currentStep = 1
			console.log(pricingFormula)
		}
	}
</script>

<ClassicPageWrapper>
	<Steps {currentStep} steps={["Choix", "Payment", "Résumé"]} />
	<h2>Choisis son abonnement</h2>
	<PriceTile
		onTap={() => {pricingFormula = "INTERACTIVE"; startPayment()}}
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
		onTap={() => {pricingFormula = "IMMERSIVE"; startPayment()}}
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
	<p>Chez WETALE, nous croyons en la flexibilité et la liberté de nos utilisateurs. Vous pouvez modifier ou annuler votre abonnement à tout moment directement depuis votre compte, sans frais supplémentaires ni engagement. Que vous souhaitiez passer à une formule différente ou mettre fin à votre abonnement, le processus est simple et rapide. Votre expérience est au cœur de nos priorités, et nous souhaitons qu’elle reste toujours adaptée à vos besoins.</p>
</ClassicPageWrapper>

<style>
	h2 {
		font-size: 1.5rem;
		font-weight: 900;
		margin-bottom: 32px;
		margin-top: 53px;
	}
</style>
