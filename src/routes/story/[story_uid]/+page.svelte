<script lang="ts">
	import ImagePageWrapper from "../../../components/ui/pageWrappers/ImagePageWrapper.svelte"
	import SectionTitle from "../../../components/ui/sections/SectionTitle.svelte"
	import getCategoryDatas from "../../../utils/functions/categories/getCategoryDatas"
	import FavoriteStar from "../../../components/ui/stories/FavoriteStar/FavoriteStar.svelte"
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"
	import getStoryFromUid from "../../../utils/functions/api/getStoryFromUid"
	import ParagraphSkeleton from "../../../components/ui/skeleton/ParagraphSkeleton.svelte"
	import type { StoryBasic } from "../../../utils/types/StoryBasic"
	import { ErrorOffline } from "../../../utils/errors/ErrorOffline"
	import { ErrorApiNoResult } from "../../../utils/errors/ErrorApiNoResult"
	import Error from "../../+error.svelte"
	import { onMount } from "svelte"
	import { lastCategory } from "../../../utils/writables/lastCategory"
	import { isUserConnected } from "../../../utils/stores/currentUser"
	import { TalesCategories } from "../../../utils/enums/TalesCategories"

	let {
		data,
	}: {
		data: {
			storyUid: string
		}
	} = $props()
	let { storyUid } = data

	let storyPromise = getStoryFromUid(storyUid)
	let error: Error | undefined = $state()
	let story: StoryBasic | undefined = $state()

	let imageUri: string = $derived<string>(
		`/stories_preview_images/${story?.type.toString() ?? $lastCategory?.toString() ?? "default"}.webp`,
	)
	let getViewTransitionName = (
		storyType: TalesCategories | undefined,
	): string => {
		switch (storyType) {
			case TalesCategories.Romance: {
				return "romancepaganim"
			}
			case TalesCategories.Detective: {
				return "detectivepaganim"
			}
			case TalesCategories.ScienceFiction: {
				return "sfpaganim"
			}
			case TalesCategories.Adventure: {
				return "adventurepaganim"
			}
			case TalesCategories.Thriller: {
				return "thrillerpaganim"
			}
			default: {
				return "fantasypaganim"
			}
		}
	}
	let viewTransitionName: string = $derived<string>(
		getViewTransitionName(story?.type ?? $lastCategory),
	)

	onMount(async () => {
		try {
			story = await storyPromise
			$lastCategory = story.type
		} catch (error_) {
			console.error(error_)
			error = error_ as Error
		}
	})
</script>

{#if error}
	{#if error instanceof ErrorOffline}
		<p>
			Vous n'êtes pas connecté à internet, essayez d'activer les données mobiles
		</p>
	{:else if error instanceof ErrorApiNoResult}
		<p>Aucune histoire n'a été trouvée</p>
	{:else}
		<p>Une erreur inconnu est survenue: {error.message}</p>
	{/if}
{:else}
	<ImagePageWrapper {viewTransitionName} backgroundImageUri={imageUri}>
		<div class:container={true}>
			<div class:titleDiv={true}>
				<SectionTitle
					text={story?.title ?? ""}
					withMargin={false}
					isSkeleton={story === undefined}
				/>
				{#if $isUserConnected}
					<FavoriteStar checked={true} />
				{/if}
			</div>
			<p class:chapter={true}>
				{#await storyPromise}
					<ParagraphSkeleton />
				{:then story}
					{story.lastChapitre} Chapitres
				{/await}
			</p>
			<div>
				<p><b>Temps:</b> Environ 20 minutes par chapitres</p>
				<p class:type={true}>
					{#await storyPromise}
						<b>Genre:</b>
						<ParagraphSkeleton lettersCount={6} />
					{:then story}
						<b>Genre:</b>{getCategoryDatas(story.type).title}
					{/await}
				</p>
			</div>
			{#await storyPromise}
				<ParagraphSkeleton linesCount={3} />
			{:then story}
				<p class:blurb={true}>{story.blurb}</p>
				<div class:linkDiv={true}>
					<a
						class:link_simple={true}
						use:touchHandlers
						href="/story/{story.uid}/read/1">Découvrir cette histoire</a
					>
				</div>
			{/await}
		</div>
	</ImagePageWrapper>
{/if}

<style lang="scss">
	.titleDiv {
		display: flex;
		align-items: start;
	}
	.container > * {
		margin-bottom: 0.5rem;
	}
	.linkDiv {
		text-align: end;
	}
	.type {
		display: flex;
		gap: 0.4em;
	}
</style>
