<script lang="ts">
	import ImagePageWrapper from "../../../../components/ui/pageWrappers/ImagePageWrapper.svelte"
	import SectionTitle from "../../../../components/ui/sections/SectionTitle.svelte"
	import getCategoryDatas from "../../../../utils/functions/categories/getCategoryDatas"
	import FavoriteStar from "../../../../components/ui/stories/FavoriteStar/FavoriteStar.svelte"
	import { touchHandlers } from "../../../../utils/component_features/touchHandlers"

	let { data } = $props()
	let { story } = data
</script>

<ImagePageWrapper
	viewTransitionName=""
	backgroundImageUri="https://api.time.com/wp-content/uploads/2025/02/TIM250224-Musk-Cover-FINAL.jpg"
>
	<div class:container={true}>
		<div class:titleDiv={true}>
			<SectionTitle text={story.title} withMargin={false} />
			<FavoriteStar checked={true} />
		</div>
		<p class:chapter={true}>{story.lastChapitre} Chapitres</p>
		<div>
			<p><b>Temps:</b> Environ 20 minutes par chapitres</p>
			<p class:type={true}>
				<b>Genre:</b>
				{getCategoryDatas(story.type).title}
			</p>
		</div>
		<p class:blurb={true}>{story.blurb}</p>
		<div class:linkDiv={true}>
			<a class:link_simple={true} use:touchHandlers href="/s/{story.uid}"
				>Découvrir cette histoire</a
			>
		</div>
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
</style>
