<script lang="ts">
	import SectionTitle from "../../sections/SectionTitle.svelte"
	import StoryTilePreview from "./StoryTilePreview.svelte"
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"

	const { storiesList }: { storiesList: StoryBasic[] } = $props()
</script>

<div>
	<SectionTitle text="Suggestions" />
	{#each storiesList as story, index}
		<StoryTilePreview {...story} onRight={index % 2 === 0} />
	{/each}
</div>

<style lang="scss">
</style>
