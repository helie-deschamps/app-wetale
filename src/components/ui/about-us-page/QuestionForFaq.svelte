<script lang="ts">
	let {
		question,
		answer,
	}: {
		question: string
		answer: string
	} = $props()

	let isOpen = $state(false)
</script>

<div>
	<p class="question" onclick={() => (isOpen = !isOpen)}>
		{question}
	</p>
	<p class="answer" class:open={isOpen} aria-hidden={!isOpen}>
		{answer}
	</p>
</div>

<style lang="scss">
	@use "../../../styles/variables/colors";

	div {
		border: 3px solid colors.$main-dark;
		border-radius: 16px;
		.question {
			padding: 1em 0.7em;
			font-weight: bold;
			cursor: pointer;
		}
		.answer {
			margin: 0 0.7em;
			max-height: 0;
			overflow: hidden;
			transition:
				margin-bottom 0.3s ease-in-out,
				max-height 0.3s ease-in-out;
			&.open {
				margin-bottom: 1em;
				max-height: 500px;
			}
		}
	}
</style>
