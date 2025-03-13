<script lang="ts">
	import { headerHeight } from "../../ui/Header/Header.svelte"
	import { type Snippet } from "svelte"
	let {
		children,
	}: {
		children: Snippet
	} = $props()
</script>

<main style={`padding-top: ${String(Number($headerHeight ?? 0) + 32)}px`}>
	{@render children()}
</main>

<style lang="scss">
	main {
		padding: 30px;
		background-color: var(--background-color);
		color: var(--text-color);
	}
</style>
