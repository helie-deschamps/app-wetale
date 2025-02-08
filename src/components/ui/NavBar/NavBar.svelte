<script module lang="ts">
	import { type Writable, writable } from "svelte/store"
	export const navBar: Writable<HTMLElement | undefined> = writable(undefined)
</script>

<script lang="ts">
	let localNavBar: HTMLElement | undefined = $state(undefined)

	$effect(() => {
		navBar.set(localNavBar)
	})
</script>

<nav bind:this={localNavBar}>Navbar UwU</nav>

<style lang="scss">
	@use "/src/styles/variables/colors";

	nav {
		position: fixed;
		bottom: 3em;
		background-color: colors.$main-dark;
		color: colors.$main-light;
		padding: 1.2em 0;
		margin: 0 14px;
		width: calc(100vw - 28px);
		border-radius: 16px;
		text-align: center;
		z-index: 1000;
		view-transition-name: navbar;
		transition: translate 0.3s ease;
	}
	:global(::view-transition-group(navbar)) {
		z-index: 1000;
	}
</style>
