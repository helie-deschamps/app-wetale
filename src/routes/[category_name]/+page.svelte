<script lang="ts">
	import getCategoryDatas from "../../utils/functions/getCategoryDatas"
	import { goto } from "$app/navigation"

	let { data } = $props()

	if (!data.category) goto(`/`)
	let categoryDatas = data.category ? getCategoryDatas(data.category) : null
</script>

{#if categoryDatas}
	<div>
		<h1>{categoryDatas.title}</h1>
	</div>
{/if}

<style lang="scss">
	h1 {
		color: red;
	}
</style>
