<script lang="ts">
	import getCategoryDatas from "../../utils/functions/categories/getCategoryDatas"
	import { goto } from "$app/navigation"
	import type { TalesCategories } from "../../utils/enums/TalesCategories"

	let { data } = $props()

	let categoryDatas = getCategoryDatas(data.category as TalesCategories)
</script>

{#if categoryDatas}
	<div style:view-transition-name="{categoryDatas.lowercaseTitle}paganim">
		<h1>{categoryDatas.title}</h1>
	</div>
{/if}

<style lang="scss">
	h1 {
		color: red;
	}
</style>
