<script lang="ts">
	import { navBar } from "../../../../../components/ui/NavBar/NavBar.svelte"
	import { onDestroy, onMount } from "svelte"
	import ClassicPageWrapper from "../../../../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import Poll from "../../../../../components/ui/Poll/Poll.svelte"

	let { data } = $props()
	let { story, chapter } = data

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

<ClassicPageWrapper>
	<h1>Story {story.uid}</h1>
	<p>{chapter.body}</p>
	<Poll storyUid={story.uid} {chapter}></Poll>
</ClassicPageWrapper>
