<script lang="ts">
	import { headerHeight } from "../../ui/Header/Header.svelte"
	import { type Snippet } from "svelte"
	let {
		children,
		smallBorders = false,
	}: {
		children: Snippet
		smallBorders?: boolean
	} = $props()
</script>

<main style={`padding-top: ${String(Number($headerHeight ?? 0) + 32)}px${smallBorders ? "; padding-right: 10px; padding-left: 10px" : ""}`}>
	{@render children()}
</main>

<style lang="scss">
	main {
		padding: 30px;
		background-color: var(--background-color, inherit);
		color: var(--text-color, currentColor);
	}
</style>
