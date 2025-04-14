<script lang="ts">
	import SectionTitle from "../../sections/SectionTitle.svelte"
	import StoryTilePreview from "./StoryTilePreview.svelte"
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"

	const { storiesList }: { storiesList: StoryBasic[] } = $props()
</script>

<div>
	<SectionTitle text="Suggestions" />
	{#each storiesList as story (story.uid)}
		<StoryTilePreview {...story} onRight={false} />
	{/each}
</div>

<style lang="scss">
</style>
