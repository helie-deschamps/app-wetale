<script lang="ts">
	import SectionTitle from "../../sections/SectionTitle.svelte"
	import StoryTilePreviewFull from "./StoryTilePreviewFull.svelte"
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"

	const { story }: { story: StoryBasic } = $props()
</script>

<div>
	<SectionTitle text="En cours" />
	<StoryTilePreviewFull
		title={story.title}
		blurb={story.blurb}
		type={story.type}
		uid={story.uid}
		lastChapitre={story.lastChapitre}
		completionRatio={story.completionRatio}
	/>
</div>

<style lang="scss">
</style>
