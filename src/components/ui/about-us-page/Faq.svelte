<script lang="ts">
	import SectionTitle from "../sections/SectionTitle.svelte"
	import QuestionForFaq from "./QuestionForFaq.svelte"

	const questions: {
		question: string
		answer: string
	}[] = [
		{
			question: "Puis-je lire une histoire sans voter ?",
			answer:
				"Si vous souhaitez simplement lire l’histoire, ou ne savez pas quel choix faire, vous pouvez simplement ignorer le vote.",
		},
		{
			question: "A quelle fréquence puis-je voter ?",
			answer:
				"Un vote est proposé à la fin de chaque chapitre sorti le jour même, pour les inscrits et les abonnés.",
		},
		{
			question: "Jusqu’à quelle heure puis-je voter ?",
			answer:
				"Le vote est disponible jusqu’à minuit du jour de sorti du chapitre.",
		},
		{
			question: "Combien de temps dure une histoire ?",
			answer:
				"WeTale propose 6 catégories d’histoires, avec un chapitre par jour pour chaque durant un mois.",
		},
		{
			question: "Combien de temps une histoire reste-t-elle disponible ?",
			answer:
				"Les histoires terminées restent disponibles dans l’application, rangées par catégories.",
		},
		{
			question: "Dois-je créer un compte pour participer ?",
			answer:
				"Vous pouvez voter sur trois chapitres sans engagement. Pour voter sur tous les chapitres qui sortent, la création d’un compte est nécessaire.",
		},
		{
			question: "WeTale fonctionne-t-il hors ligne ?",
			answer:
				"WeTale a besoin d’une connexion Internet pour pouvoir accéder à son contenu, mais vous pouvez télécharger les chapitres en avance, afin de pas avoir de problème de connexion pendant votre lecture.",
		},
	]
</script>

<div class="container">
	<SectionTitle text="FAQ" />
	<ul>
		{#each questions as { question, answer } (question)}
			<li>
				<QuestionForFaq {question} {answer} />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use "../../../styles/variables/colors";

	.container {
		padding: 2rem 10px;
	}
	ul {
		list-style: none;
		padding: 0 1rem;
		margin: 1em 0;
		li:not(:last-child) {
			margin-bottom: 0.5em;
		}
	}
</style>
