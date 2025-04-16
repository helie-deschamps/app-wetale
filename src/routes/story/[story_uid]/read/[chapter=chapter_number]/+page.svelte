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

	let chapterPromise = $state(getChapterDatas(storyUid, chapterNumber))

	let isSettingOpen = $state(false)
	let textSizeMultiplier = $state<number>(1)
	void (async () => {
		textSizeMultiplier = (await $userPrefs?.get("textSizeMultiplier")) ?? 1
	})()
	$effect(() => {
		void $userPrefs
			?.set("textSizeMultiplier", textSizeMultiplier)
			.then(() => void $userPrefs.save())
	})
	let darkTheme = $state<boolean>(false)
	void (async () => {
		darkTheme = (await $userPrefs?.get("darkTheme")) ?? false
	})()
	$effect(() => {
		void $userPrefs
			?.set("darkTheme", darkTheme)
			.then(() => void $userPrefs.save())
		document.body.style.background = darkTheme ? "#1a191d" : "#f7f0e6"
	})
	let font = $state<"'Inter'" | "'Comic Neue'" | "system-ui">("system-ui")
	void (async () => {
		font = (await $userPrefs?.get("font")) ?? "system-ui"
	})()
	$effect(() => {
		void $userPrefs?.set("font", font).then(() => void $userPrefs.save())
	})
	let interlignes = $state<number>(142)
	void (async () => {
		interlignes = (await $userPrefs?.get("interlignes")) ?? 142
	})()
	$effect(() => {
		void $userPrefs
			?.set("interlignes", interlignes)
			.then(() => void $userPrefs.save())
	})

	let headerHeight = $state<number>(0)

	let oldScroll = 0
	let navBarPosition = 0
	let ticking = false

	let thisHeaderXPosition: number = $state(0)

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
				thisHeaderXPosition = -navBarPosition
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

	let supposedCategoryColor: string | null = $state(null)

	if ($lastCategory) {
		let category = getCategoryDatas($lastCategory)
		supposedCategoryColor =
			(category.isAlternated ? category.colorText : category.colorBackground) ??
			null
	}

	const oldBodyBackground = document.body.style.background
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
		document.body.style.background = oldBodyBackground
	})

	let votingTransform = $state("translateX(100%) scaleX(-.2)")
	const onVote = async (vote: Promise<boolean>) => {
		await vote
		votingTransform = "translateX(0%) scaleX(1)"
		await new Promise<boolean>(resolve =>
			setTimeout(() => {
				resolve(true)
			}, 1900),
		)
		votingTransform = "translateX(100%) scaleX(-.2)"
		chapterPromise = getChapterDatas(storyUid, chapterNumber)
	}
</script>

<div
	style:--text-color={darkTheme ? "#f7f0e6" : "#1a191d"}
	style:--background-color={darkTheme ? "#1a191d" : "#f7f0e6"}
	style:--text-font={font}
	style:--text-line-height="{interlignes}%"
	style:display="contents"
>
	<div
		class:voted={true}
		style:transform={votingTransform}
		style:background={supposedCategoryColor}
	>
		<div>Votre vote a bien été pris en compte.</div>
	</div>
	<ReadHeader
		bind:darkTheme
		bind:font
		bind:interlignes
		bind:height={headerHeight}
		bind:textSizeMultiplier
		bind:isSettingOpen
		topPosition={thisHeaderXPosition}
	/>
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
			{@const category = getCategoryDatas(chapter.category)}
			<Poll
				{storyUid}
				{chapter}
				colors={category.isAlternated
					? [category.colorText ?? "black", category.colorBackground ?? "white"]
					: [
							category.colorBackground ?? "black",
							category.colorText ?? "white",
						]}
				onSubmit={onVote}
			/>
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</ClassicPageWrapper>
</div>

<style lang="scss">
	.voted {
		z-index: 500;
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		justify-content: center;
		align-items: center;
		display: flex;
		transition: transform 0.5s ease-in-out;
		div {
			text-align: center;
			font-weight: 800;
			font-size: 1.15em;
			background: white;
			border-radius: 16px;
			padding: 97px 4em;
			margin: 0 2em;
		}
	}
	.text_body {
		line-height: var(--text-line-height, 142);
		user-select: text;
		font-family: var(--text-font, inherit), sans-serif;
	}
	h1 {
		font-size: 1.3rem;
		margin-bottom: 24px;
	}
</style>
