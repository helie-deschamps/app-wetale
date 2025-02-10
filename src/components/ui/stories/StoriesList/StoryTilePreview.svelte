<script lang="ts">
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"
	import getCategoryDatas from "../../../../utils/functions/categories/getCategoryDatas"
	import CategoryIcon from "../../categories/CategoryIcon/CategoryIcon.svelte"
	import StoryTileIcon from "./StoryTileIcon.svelte"

	const { title, blurb, type, onRight = false }: StoryBasic & { onRight?: boolean } = $props()

	function hashToAngle(str: string): number {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = (hash * 31 + str.charCodeAt(i)) >>> 0; // 31 est un nombre premier souvent utilisé
		}
		let normalized = hash / 0xFFFFFFFF;
		return normalized * Math.PI * 2;
	}
</script>

<div class:global={true}>
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

<style lang="scss">
	.global {
		border: 2px solid #000;
		border-radius: 16px;
		display: flex;
		min-height: 74px;
		height: 4em;
		overflow: hidden;
		margin-bottom: 14px;
	}
	.icon {
		width: 74px;
		overflow: hidden;
		flex-shrink: 0;
		.left {
			border-radius: 16px 0 0 16px;
		}
		.right {
			border-radius: 0 16px 16px 0;
		}
	}
  .iconRotator {
    width: 80%;
		margin: 0 auto;
    display: block;
    height: 100%;
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
    -webkit-box-orient: vertical;
	}
	p {
		font-size: 0.8rem;
		line-height: 1.1;
		height: 3.3em;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
