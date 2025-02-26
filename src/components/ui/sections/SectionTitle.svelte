<script lang="ts">
	const {
		text,
		withMargin = true,
		isSkeleton = false,
	}: {
		text: string
		withMargin?: boolean
		isSkeleton?: boolean
	} = $props()
</script>

<h2
	style="margin-bottom:{withMargin ? '1rem;' : 0};"
	class:skeleton={isSkeleton}
>
	{isSkeleton ? "Chargement..." : text}
</h2>

<style lang="scss">
	h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
		font-weight: 900;
		flex: 1;
		display: inline-block;
	}

	.skeleton {
		background: #222
			linear-gradient(
				to right,
				#222 0,
				#222 calc(50% - 2em),
				#999 50%,
				#222 calc(50% + 2em),
				#222 100%
			)
			0 0 no-repeat;
		-webkit-background-size: 150px;
		background-size: 150px;
		color: rgba(255, 255, 255, 0.3);
		-webkit-background-clip: text;
		animation-name: shine;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		animation-fill-mode: forwards;
		text-shadow: 0 0 0 rgba(255, 255, 255, 0.65);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-size-adjust: none;
	}

	@keyframes shine {
		0% {
			background-position-x: -6em;
		}
		80% {
			background-position-x: calc(100% + 6em);
		}
		100% {
			background-position-x: calc(100% + 6em);
		}
	}
</style>
