<script lang="ts">
	import getCategoryDatas from "../../utils/functions/categories/getCategoryDatas"
	import { TalesCategories } from "../../utils/enums/TalesCategories"
	import StoriesList from "../../components/ui/stories/StoriesList/StoriesList.svelte"
	import InProgressStory from "../../components/ui/stories/InProgress/InProgressStory.svelte"
	import type { StoryBasic } from "../../utils/types/StoryBasic"
	import ImagePageWrapper from "../../components/ui/pageWrappers/ImagePageWrapper.svelte"
	import { lastCategory } from "../../utils/writables/lastCategory"

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

	var storiesList: StoryBasic[] = [
		{
			title: "Panique à bord",
			blurb:
				"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
			type: TalesCategories.Thriller,
			uid: "chasseur",
			lastChapitre: 12,
			completionRatio: 87,
		},
		{
			title: "Le Reflet du Chasseur",
			blurb:
				"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
			type: TalesCategories.Thriller,
			uid: "chasseur",
			lastChapitre: 12,
			completionRatio: 95,
		},
		{
			title: "La magie",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Fantasy,
			uid: "magie",
			lastChapitre: 12,
			completionRatio: 33,
		},
		{
			title:
				"La magie 2, un voyage à Bucarest, ou l'oportunité de découvrir la Roumanie, inspiré par le film de Wes Anderson",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
			uid: "bucarest",
			lastChapitre: 12,
			completionRatio: 87,
		},
		{
			title: "Barman Night",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Romance,
			uid: "barman",
			lastChapitre: 12,
			completionRatio: 77,
		},
		{
			title: "La fille et le loup",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
			uid: "loup",
			lastChapitre: 12,
			completionRatio: 42,
		},
		{
			title: "Bertie le chien",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Adventure,
			uid: "chien",
			lastChapitre: 12,
			completionRatio: 13,
		},
		{
			title: "1, 2, 3 soleil",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Romance,
			uid: "soleil",
			lastChapitre: 12,
			completionRatio: 12,
		},
	]
</script>

<ImagePageWrapper
	viewTransitionName="{categoryDatas.lowercaseTitle}paganim"
	backgroundImageUri={imageUri}
>
	<InProgressStory
		story={storiesList[0]}
		mainColor={(categoryDatas.isAlternated
			? categoryDatas.colorText
			: categoryDatas.colorBackground) ?? "black"}
	/>
	<div class:separator={true}></div>
	<StoriesList storiesList={storiesList.slice(1)} />
</ImagePageWrapper>

<style lang="scss">
	@use "/src/styles/variables/colors";

	.separator {
		height: 41px;
	}
</style>
