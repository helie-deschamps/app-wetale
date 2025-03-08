<script lang="ts">
	import { navBar } from "../../../../../components/ui/NavBar/NavBar.svelte"
	import { onDestroy, onMount } from "svelte"
	import ClassicPageWrapper from "../../../../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import Poll from "../../../../../components/ui/Poll/Poll.svelte"
	import getChapterDatas from "../../../../../utils/functions/api/getChapterDatas"
	import { header } from "../../../../../components/ui/Header/Header.svelte"
	import ReadHeader from "../../../../../components/ui/Header/ReadHeader.svelte"
	import { userPrefs } from "../../../../../utils/stores/userPrefs"
	import DefaultLoader from "../../../../../components/ui/skeleton/DefaultLoader.svelte"
	import { lastCategory } from "../../../../../utils/writables/lastCategory"
	import getCategoryDatas from "../../../../../utils/functions/categories/getCategoryDatas"

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

	let textSizeMultiplier = $state<number>(1)
	void (async () => {
		textSizeMultiplier = (await $userPrefs?.get("textSizeMultiplier")) ?? 1
	})()
	$effect(() => {
		void $userPrefs
			?.set("textSizeMultiplier", textSizeMultiplier)
			.then(() => void $userPrefs.save())
	})

	let headerHeight = $state<number>(0)

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

	const onTapDiv = () => {
		if ($navBar) ($navBar as HTMLElement).style.translate = `0 0`
		navBarPosition = 0
	}

	let startX: number, startY: number, startTime: number
	const onTapStart = (event: MouseEvent) => {
		startX = event.clientX
		startY = event.clientY
		startTime = Date.now()
	}
	const onTapEnd = (event: MouseEvent) => {
		const elapsedTime = Date.now() - startTime

		const maxDistance = 10
		const maxDuration = 300

		const distance = Math.hypot(event.clientX - startX, event.clientY - startY)

		if (distance < maxDistance && elapsedTime < maxDuration) {
			onTapDiv()
		}
	}

	let supposedCategoryColor: string | null = null

	if ($lastCategory) {
		let category = getCategoryDatas($lastCategory)
		supposedCategoryColor =
			(category.isAlternated ? category.colorText : category.colorBackground) ??
			null
	}

	onMount(() => {
		if ($header) ($header as HTMLElement).style.display = "none"
		globalThis.addEventListener("scroll", onScrollDiv)
		globalThis.addEventListener("pointerdown", onTapStart)
		globalThis.addEventListener("pointerup", onTapEnd)
	})
	onDestroy(() => {
		if ($header) ($header as HTMLElement).style.display = "flex"
		if ($navBar) ($navBar as HTMLElement).style.translate = `0 0`
		globalThis.removeEventListener("scroll", onScrollDiv)
		globalThis.removeEventListener("pointerdown", onTapStart)
		globalThis.removeEventListener("pointerup", onTapEnd)
	})
</script>

<ReadHeader bind:height={headerHeight} bind:textSizeMultiplier />
<ClassicPageWrapper>
	<div style:height="{headerHeight + 12}px"></div>
	{#await chapterPromise}
		<DefaultLoader
			text="Chargement de l'histoire"
			color={supposedCategoryColor}
		/>
	{:then chapter}
		<h1>{chapter.title}</h1>
		<p class="text_body" style="font-size: {textSizeMultiplier}rem">
			{chapter.body}
		</p>
		<Poll {storyUid} {chapter}></Poll>
	{:catch error}
		<p>{error.message}</p>
	{/await}
</ClassicPageWrapper>

<style lang="scss">
	.text_body {
		line-height: 142%;
		user-select: text;
	}
	h1 {
		font-size: 1.3rem;
		margin-bottom: 24px;
	}
</style>
