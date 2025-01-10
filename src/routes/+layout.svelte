<script lang="ts">
	import Lenis from "lenis"
	import { onMount, type Snippet } from "svelte"

	import "lenis/dist/lenis.css"

	let { children }: { children: Snippet } = $props()

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		})

		lenis.on("scroll", e => {
			console.log(e)
		})
	})
</script>

<div>
	{@render children()}
</div>
