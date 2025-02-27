<script lang="ts">
	import { navBar } from "../../../../../components/ui/NavBar/NavBar.svelte"
	import { onDestroy, onMount } from "svelte"
	import ClassicPageWrapper from "../../../../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import Poll from "../../../../../components/ui/Poll/Poll.svelte"
	import getChapterDatas from "../../../../../utils/functions/api/getChapterDatas"
	import CircularProgress from "@smui/circular-progress"

	let {
		data,
	}: {
		data: {
			storyUid: string
			chapterNumber: number
		}
	} = $props()
	let { storyUid, chapterNumber } = data

	let chapterPromise = getChapterDatas(storyUid, chapterNumber)

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
				if ($navBar)
					($navBar as HTMLElement).style.translate =
						`0 ${String(navBarPosition)}px`
				ticking = false
			})
		}
	}

	onMount(() => {
		window.addEventListener("scroll", onScrollDiv)
	})
	onDestroy(() => {
		if ($navBar) ($navBar as HTMLElement).style.translate = `0 0`
		window.removeEventListener("scroll", onScrollDiv)
	})
</script>

<ClassicPageWrapper>
	{#await chapterPromise}
		<div class="loading">
			<CircularProgress style="height: 32px; width: 32px;" indeterminate />
			<i>Chargement de l'histoire</i>
		</div>
	{:then chapter}
		<p>{chapter.body}</p>
		<Poll {storyUid} {chapter}></Poll>
	{:catch error}
		<p>{error.message}</p>
	{/await}
</ClassicPageWrapper>

<style lang="scss">
	.loading {
		display: flex;
		align-items: center;
		margin-top: 4em;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
