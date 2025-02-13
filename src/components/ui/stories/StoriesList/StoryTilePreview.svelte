<script lang="ts">
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"
	import StoryTileIcon from "./StoryTileIcon.svelte"
	import { touchHandlers } from "../../../../utils/component_features/touchHandlers"

	const {
		title,
		blurb,
		type,
		uid,
		onRight = false,
	}: StoryBasic & { onRight?: boolean } = $props()
</script>

<a href={`/story/${uid}`}>
	<div use:touchHandlers class:global={true}>
		{#if !onRight}
			<StoryTileIcon stringForRotation={title} {type} />
		{/if}
		<div class:datas={true}>
			<h3 style:text-align={onRight ? "right" : "left"}>{title}</h3>
			<p style:text-align={onRight ? "right" : "left"}>{blurb}</p>
		</div>
		{#if onRight}
			<StoryTileIcon stringForRotation={title} {type} />
		{/if}
	</div>
</a>

<style lang="scss">
	.global {
		border: 2px solid #000;
		border-radius: 16px;
		display: flex;
		min-height: 74px;
		height: 4em;
		overflow: hidden;
		margin-bottom: 14px;
		color: #1a191d;
	}
	.datas {
		margin: 0 12px 0 15px;
		flex: 1;
		padding: 5px 0;
	}
	h3 {
		font-weight: 900;
		font-size: 1rem;
		text-transform: uppercase;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	p {
		font-size: 0.8rem;
		line-height: 1.1;
		height: 3.3em;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
