<script lang="ts">
	import { navBar } from "../../../../../components/ui/NavBar/NavBar.svelte"
	import { onDestroy, onMount } from "svelte"
	import ClassicPageWrapper from "../../../../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import Poll from "../../../../../components/ui/Poll/Poll.svelte"
	import getStoryFromUid from "../../../../../utils/functions/api/getStoryFromUid"
	import type { StoryBasic } from "../../../../../utils/types/StoryBasic"
	import getCategoryDatas from "../../../../../utils/functions/categories/getCategoryDatas"
	import SectionTitle from "../../../../../components/ui/sections/SectionTitle.svelte"
	import getChapterDatas from "../../../../../utils/functions/api/getChapterDatas"
	import type { Chapter } from "../../../../../utils/types/Chapter"

	let { data } = $props()
	let { storyUid, chapterNumber } = data

	let chapterPromise = getChapterDatas(storyUid, chapterNumber)

	chapterPromise

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
	{#await chapterPromise}
		<p>Loading...</p>
	{:then chapter}
		<p>{chapter.body}</p>
		<Poll {storyUid} {chapter}></Poll>
	{:catch error}
		<p>{error.message}</p>
	{/await}
</ClassicPageWrapper>
