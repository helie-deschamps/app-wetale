<script lang="ts">
	import type { StoryBasic } from "../../../../utils/types/StoryBasic"
	import getCategoryDatas from "../../../../utils/functions/categories/getCategoryDatas"
	import CategoryIcon from "../../categories/CategoryIcon/CategoryIcon.svelte"

	const { title, blurb, type }: StoryBasic = $props()
</script>

<div class:global={true}>
	<span style={`background-color: ${getCategoryDatas(type).colorBackground};`}>
		<CategoryIcon category={type} />
	</span>
	<div class:datas={true}>
		<h3>{title}</h3>
		<p>{blurb}</p>
	</div>
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
	span {
		border-radius: 0 16px 16px 0;
		width: 74px;
		overflow: hidden;
		flex-shrink: 0;
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
