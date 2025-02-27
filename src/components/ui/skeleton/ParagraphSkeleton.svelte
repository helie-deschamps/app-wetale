<script lang="ts">
	import { onMount } from "svelte"

	const {
		linesCount = 1,
		lettersCount,
	}: {
		linesCount?: number
		lettersCount?: number | undefined
	} = $props()

	let div: HTMLDivElement | undefined = $state()

	onMount(() => {
		let lineHeight = window.getComputedStyle(div as HTMLDivElement).lineHeight
		lineHeight = lineHeight === "normal" ? "1.2em" : lineHeight
		;(div as HTMLDivElement).style.height =
			`calc(${lineHeight} * ${String(linesCount)})`
		;(div as HTMLDivElement).style.borderRadius = `calc(${lineHeight} / 4)`
		;(div as HTMLDivElement).style.width = lettersCount
			? `calc(${String(lettersCount)} * 1em)`
			: "auto"
	})
</script>

<div bind:this={div}></div>

<style lang="scss">
	div {
		background: #222
			linear-gradient(
				to right,
				#222 0,
				#222 calc(50% - 2em),
				#777 50%,
				#222 calc(50% + 2em),
				#222 100%
			)
			0 0 no-repeat;
		opacity: 0.23;
		-webkit-background-size: 150px;
		background-size: 150px;
		animation-name: shine;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		animation-fill-mode: forwards;
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
