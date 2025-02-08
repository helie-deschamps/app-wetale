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
		},
		{
			title: "La magie 2",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.Fantasy,
		},
		{
			title: "La magie 2",
			blurb:
				"Un magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magieUn magicien découvre qu'il peut vraiment faire des tours de magie.",
			type: TalesCategories.ScienceFiction,
		},
	]
</script>

<div>
	<SectionTitle text="Stories" />
	{#each storiesList as { title, blurb, type }}
		<StoryTilePreview {title} {blurb} {type} />
	{/each}
</div>

<style lang="scss">
</style>
