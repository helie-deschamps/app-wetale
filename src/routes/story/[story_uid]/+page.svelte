<script lang="ts">
	import ImagePageWrapper from "../../../components/ui/pageWrappers/ImagePageWrapper.svelte"
	import SectionTitle from "../../../components/ui/sections/SectionTitle.svelte"
	import getCategoryDatas from "../../../utils/functions/categories/getCategoryDatas"
	import FavoriteStar from "../../../components/ui/stories/FavoriteStar/FavoriteStar.svelte"
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"
	import getStoryFromUid from "../../../utils/functions/api/getStoryFromUid"
	import ParagraphSkeleton from "../../../components/ui/skeleton/ParagraphSkeleton.svelte"

	let { data } = $props()
	let { storyUid } = data

	let story = getStoryFromUid(storyUid)
</script>

<ImagePageWrapper
	viewTransitionName=""
	backgroundImageUri="https://api.time.com/wp-content/uploads/2025/02/TIM250224-Musk-Cover-FINAL.jpg"
>
	<div class:container={true}>
		<div class:titleDiv={true}>
			{#await story}
				<SectionTitle text={""} withMargin={false} isSkeleton />
			{:then story}
				<SectionTitle text={story.title} withMargin={false} />
			{/await}
			<FavoriteStar checked={true} />
		</div>
		{#await story}
			<p class:chapter={true}><ParagraphSkeleton /></p>
		{:then story}
			<p class:chapter={true}>{story.lastChapitre} Chapitres</p>
		{/await}
		<div>
			<p><b>Temps:</b> Environ 20 minutes par chapitres</p>
			{#await story}
				<p class:type={true}>
					<b>Genre:</b>
					<ParagraphSkeleton lettersCount={6} />
				</p>
			{:then story}
				<p class:type={true}>
					<b>Genre:</b>{getCategoryDatas(story.type).title}
				</p>
			{/await}
		</div>
		{#await story}
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
