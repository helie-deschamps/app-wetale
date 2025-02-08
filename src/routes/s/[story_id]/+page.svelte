<script lang="ts">
	import { navBar } from "../../../components/ui/NavBar/NavBar.svelte"
	import { onDestroy, onMount } from "svelte"
	import { headerHeight } from "../../../components/ui/Header/Header.svelte"

	let { data } = $props()
	let { storyID, StoryTitle, storyBody, StoryCategory } = data

	let oldScroll = 0
	let navBarPosition = 0
	let ticking = false

	const onScrollDiv = () => {
		const newScroll = window.scrollY
		const scrollDiff = oldScroll - newScroll
		navBarPosition = Math.min(
			Math.max(navBarPosition - scrollDiff * 1.2, 0),
			150,
		)
		oldScroll = newScroll
		if (!ticking) {
			ticking = true
			requestAnimationFrame(() => {
				if ($navBar) $navBar.style.translate = `0 ${navBarPosition}px`
				ticking = false
			})
		}
	}

	onMount(() => {
		window.addEventListener("scroll", onScrollDiv)
	})
	onDestroy(() => {
		if ($navBar) $navBar.style.translate = `0 0`
		window.removeEventListener("scroll", onScrollDiv)
	})
</script>

<div style={`padding-top: ${($headerHeight ?? 0) + 32}px`}>
	<h1>Story {storyID}</h1>
	<p>{storyBody}</p>
</div>

<style lang="scss">
	div {
		padding: 30px;
	}
</style>
