<script lang="ts">
	import SectionTitle from "../../sections/SectionTitle.svelte"
	import StoryTilePreview from "./StoryTilePreview.svelte"
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"

	const {
		storiesList,
		hadToRotateIcons = true,
	}: {
		storiesList: StoryBasic[]
		hadToRotateIcons?: boolean
	} = $props()

	console.log(hadToRotateIcons)
</script>

<div>
	<SectionTitle text="Suggestions" />
	{#each storiesList as story (story.uid)}
		<StoryTilePreview {...story} onRight={false} hadToRotateIcon={hadToRotateIcons} />
	{/each}
</div>

<style lang="scss">
</style>
