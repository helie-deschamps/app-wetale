<script lang="ts">
	import SectionTitle from "../../sections/SectionTitle.svelte"
	import StoryTilePreview from "./StoryTilePreview.svelte"
	import { TalesCategories } from "../../../../utils/enums/TalesCategories"
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"

	let storiesList: StoryBasic[] = [
		{
			title: "Le Reflet du Chasseur",
			blurb:
				"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
			type: TalesCategories.Thriller,
			uid: "chasseur",
		},
		{
			title: "La magie",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Fantasy,
			uid: "magie",
		},
		{
			title:
				"La magie 2, un voyage à Bucarest, ou l'oportunité de découvrir la Roumanie, inspiré par le film de Wes Anderson",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
			uid: "bucarest",
		},
		{
			title: "Barman Night",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Romance,
			uid: "barman",
		},
		{
			title: "La fille et le loup",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
			uid: "loup",
		},
		{
			title: "Bertie le chien",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Adventure,
			uid: "chien",
		},
		{
			title: "1, 2, 3 soleil",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Romance,
			uid: "soleil",
		},
	]
</script>

<div>
	<SectionTitle text="Suggestions" />
	{#each storiesList as { title, blurb, type, uid }, index}
		<StoryTilePreview {uid} {title} {blurb} {type} onRight={index % 2 === 0} />
	{/each}
</div>

<style lang="scss">
</style>
