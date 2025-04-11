<script lang="ts">
	import SectionTitle from "../sections/SectionTitle.svelte"
	import QuestionForFaq from "./QuestionForFaq.svelte"
</script>

<div class="container">
	<SectionTitle text="FAQ" />
	<ul>
		<li>
			<QuestionForFaq
				question="Puis-je lire une histoire sans voter ?"
				answer="Si vous souhaitez simplement lire l’histoire, ou ne savez pas quel choix faire, vous pouvez simplement ignorer le vote."
			/>
		</li>
		<li>
			<QuestionForFaq
				question="Puis-je lire une histoire sans voter ?"
				answer="Si vous souhaitez simplement lire l’histoire, ou ne savez pas quel choix faire, vous pouvez simplement ignorer le vote."
			/>
		</li>
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
