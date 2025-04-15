<script lang="ts">
	import getCategoryDatas from "../../utils/functions/categories/getCategoryDatas"
	import { TalesCategories } from "../../utils/enums/TalesCategories"
	import StoriesList from "../../components/ui/stories/StoriesList/StoriesList.svelte"
	import InProgressStory from "../../components/ui/stories/InProgress/InProgressStory.svelte"
	import type { StoryBasic } from "../../utils/types/StoryBasic"
	import ImagePageWrapper from "../../components/ui/pageWrappers/ImagePageWrapper.svelte"
	import { lastCategory } from "../../utils/writables/lastCategory"
	import getStoriesListFromCategory from "../../utils/functions/api/getStoriesListFromCategory"
	import DefaultLoader from "../../components/ui/skeleton/DefaultLoader.svelte"

	let {
		data,
	}: {
		data: { category: TalesCategories; category_name: string }
	} = $props()

	let categoryDatas = getCategoryDatas(data.category)

	let category = data.category
	$lastCategory = category
	let imageUri: string = $state(`/stories_preview_images/default.webp`)
	try {
		imageUri = `/stories_preview_images/${category.toString()}.webp`
	} catch (error) {
		console.log(error)
	}

	let storiesListPromise: Promise<StoryBasic[]> = getStoriesListFromCategory(
		data.category,
	)
</script>

<ImagePageWrapper
	viewTransitionName="{categoryDatas.lowercaseTitle}paganim"
	backgroundImageUri={imageUri}
>
	{#await storiesListPromise}
		<DefaultLoader
			text="Chargement de l'histoire"
			color={categoryDatas.isAlternated
				? categoryDatas.colorText
				: categoryDatas.colorBackground}
		/>
	{:then storiesList}
		<InProgressStory
			story={storiesList[0]}
			mainColor={(categoryDatas.isAlternated
				? categoryDatas.colorText
				: categoryDatas.colorBackground) ?? "black"}
		/>
		<div class:separator={true}></div>
		<StoriesList
			storiesList={storiesList.slice(1)}
			hadToRotateIcons={categoryDatas.couldBeRotated}
		/>
	{:catch error}
		<p>{error.message}</p>
	{/await}
</ImagePageWrapper>

<style lang="scss">
	@use "/src/styles/variables/colors";

	.separator {
		height: 41px;
	}
</style>
