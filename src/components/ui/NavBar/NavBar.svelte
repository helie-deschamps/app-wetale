<script module lang="ts">
	import { type Writable, writable } from "svelte/store"
	export const navBar: Writable<HTMLElement | undefined> = writable(undefined)
	export const navBarHeight: Writable<number | undefined> = writable(undefined)
</script>

<script lang="ts">
	import HomeIcon from "./icons/HomeIcon.svelte"
	import FavoriteIcon from "./icons/FavoriteIcon.svelte"
	import LibraryIcon from "./icons/LibraryIcon.svelte"

	let localNavBar: HTMLElement | undefined = $state(undefined)
	let localNavBarHeight: number | undefined = $state(undefined)

	$effect(() => {
		navBar.set(localNavBar)
	})
	$effect(() => {
		navBarHeight.set(localNavBarHeight)
	})
</script>

<nav bind:this={localNavBar} bind:offsetHeight={localNavBarHeight}>
	<HomeIcon isCurrent={false} />
	<LibraryIcon isCurrent={false} />
	<FavoriteIcon isCurrent={false} />
</nav>

<style lang="scss">
	@use "/src/styles/variables/colors";

	nav {
		position: fixed;
		bottom: 30px;
		background-color: colors.$main-dark;
		color: colors.$main-light;
		padding: 14px 0 18px 0;
		margin: 0 14px;
		width: calc(100vw - 28px);
		border-radius: 16px;
		text-align: center;
		z-index: 1000;
		view-transition-name: navbar;
		transition: translate 0.3s ease;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	:global(::view-transition-group(navbar)) {
		z-index: 1000;
	}
</style>
