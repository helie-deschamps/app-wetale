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
	<button class="question" onclick={() => (isOpen = !isOpen)}>
		{question}
		<svg
			class:open={isOpen}
			width="1.2em"
			height="1.2em"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.02081 11H18.9792M11 3.02081L11 18.9792"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	</button>
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
			border: 0;
			background-color: transparent;
			width: 100%;
			padding: 1em 0.7em;
			font-weight: bold;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			svg {
				transform: rotate(0);
				transition: transform 0.3s ease-in-out;
				&.open {
					transform: rotate(45deg);
				}
			}
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
