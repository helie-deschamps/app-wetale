<script>
	import Steps from "../../components/ui/Steps/Steps.svelte"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"

	let currentStep = $state(0)
</script>

<ClassicPageWrapper>
	<Steps {currentStep} steps={["Choix", "Payment", "Résumé"]} />
</ClassicPageWrapper>
