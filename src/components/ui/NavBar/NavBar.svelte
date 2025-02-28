<script module lang="ts">
	import { type Writable, writable } from "svelte/store"
	export const navBar: Writable<HTMLElement | undefined> = writable()
	export const navBarHeight: Writable<number | undefined> = writable()
</script>

<script lang="ts">
	import LibraryLottie from "./icons/LibraryLottie.svelte"
	import HomeLottie from "./icons/HomeLottie.svelte"
	import FavoriteLottie from "./icons/FavoriteLottie.svelte"
	import getCssOsBarsHeight from "../../../utils/functions/osInfos/getCssOsBarsHeight"
	import { onMount } from "svelte"

	let localNavBar: HTMLElement | undefined = $state()
	let localNavBarHeight: number | undefined = $state()

	$effect(() => {
		navBar.set(localNavBar)
	})
	$effect(() => {
		navBarHeight.set(localNavBarHeight)
	})

	onMount(async () => {
		const { NavigationBarHeight } = await getCssOsBarsHeight()
		;(localNavBar as HTMLElement).style.bottom =
			`${String(NavigationBarHeight + 20)}px`
	})
</script>

<nav bind:this={localNavBar} bind:offsetHeight={localNavBarHeight}>
	<HomeLottie />
	<LibraryLottie />
	<FavoriteLottie />
</nav>

<style lang="scss">
	@use "/src/styles/variables/colors";

	nav {
		position: fixed;
		bottom: 20px;
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
