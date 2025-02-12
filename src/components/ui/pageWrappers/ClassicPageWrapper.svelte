<script lang="ts">
	import { headerHeight } from "../../ui/Header/Header.svelte"
	import { navBarHeight } from "../../ui/NavBar/NavBar.svelte"
	import type { Snippet } from "svelte"
	let {
		children,
	}: {
		children: Snippet
	} = $props()
</script>

<main
	style={`padding-top: ${($headerHeight ?? 0) + 32}px; padding-bottom: ${($navBarHeight ?? 0) + 60}px`}
>
	{@render children()}
</main>

<style lang="scss">
	main {
		padding: 30px;
	}
</style>
