<script lang="ts">
	import Lenis from "lenis"
	import { onMount, type Snippet } from "svelte"

	import "lenis/dist/lenis.css"
	import "/src/styles/reset.scss"
	import "/src/styles/base.scss"

	let { children }: { children: Snippet } = $props()

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		})

		lenis.on("scroll", e => {
			console.log(e)
		})
	})
	document.addEventListener("contextmenu", e => e.preventDefault())
</script>

<header>
	<a href="/login">Connection</a>
</header>

{@render children()}

<style lang="scss">
	@use "/src/styles/variables/colors";

	:global(body) {
		background-color: colors.$main-light;
	}
</style>
