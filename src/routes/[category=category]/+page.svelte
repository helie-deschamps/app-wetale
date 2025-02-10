<script lang="ts">
	import getCategoryDatas from "../../utils/functions/categories/getCategoryDatas"
	import { TalesCategories } from "../../utils/enums/TalesCategories"
	import { headerHeight } from "../../components/ui/Header/Header.svelte"
	import StoriesList from "../../components/ui/stories/StoriesList/StoriesList.svelte"
	import InProgressStory from "../../components/ui/stories/InProgress/InProgressStory.svelte"
	import type { StoryBasic } from "../../utils/types/StoryBasic"

	let { data } = $props()

	let categoryDatas = getCategoryDatas(data.category as TalesCategories)

	var storiesList: StoryBasic[] = [
		{
			title: "Panique à bord",
			blurb:
				"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
			type: TalesCategories.Thriller,
			uid: "chasseur",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title: "Le Reflet du Chasseur",
			blurb:
				"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
			type: TalesCategories.Thriller,
			uid: "chasseur",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title: "La magie",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Fantasy,
			uid: "magie",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title:
				"La magie 2, un voyage à Bucarest, ou l'oportunité de découvrir la Roumanie, inspiré par le film de Wes Anderson",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
			uid: "bucarest",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title: "Barman Night",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Romance,
			uid: "barman",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title: "La fille et le loup",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
			uid: "loup",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title: "Bertie le chien",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Adventure,
			uid: "chien",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
		{
			title: "1, 2, 3 soleil",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Romance,
			uid: "soleil",
			lastChapitre: 12,
			completionRatio: 0.87,
		},
	]
</script>

<div class:image={true}></div>
<main
	style:view-transition-name="{categoryDatas.lowercaseTitle}paganim"
>
	<InProgressStory story={storiesList[0]} />
	<div class:separator={true}></div>
	<StoriesList storiesList={storiesList.slice(1)} />
</main>

<style lang="scss">
  @use "/src/styles/variables/colors";

  .image {
		background: #D9D9D9;
		height: 312px; // 52px pour le border
	}

	main {
    clip-path: polygon(0 104px, 45px 52px, calc(100% - 45px) 52px, 100% 0, 100% 100%, 0 100%);
		padding: 83px 30px 0 30px;// 52px pour le border
		margin-top: -104px;
		z-index: 10000;
		background-color: colors.$main-light;
	}
	h1 {
		color: red;
	}
	.separator {
		height: 41px;
	}
</style>
