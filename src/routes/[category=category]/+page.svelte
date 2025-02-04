<script lang="ts">
	import getCategoryDatas from "../../utils/functions/categories/getCategoryDatas"
	import type { TalesCategories } from "../../utils/enums/TalesCategories"
	import { headerHeight } from "../../components/ui/Header/Header.svelte"

	let { data } = $props()

	let categoryDatas = getCategoryDatas(data.category as TalesCategories)
</script>

{#if categoryDatas}
	<div
		style={`padding-top: ${($headerHeight ?? 0) + 32}px`}
		style:view-transition-name="{categoryDatas.lowercaseTitle}paganim"
	>
		<h1>{categoryDatas.title}</h1>
	</div>
{/if}

<style lang="scss">
	h1 {
		color: red;
	}
</style>
