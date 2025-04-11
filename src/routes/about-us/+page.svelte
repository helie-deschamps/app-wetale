<script lang="ts">
import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
import Rostrum from "../../components/ui/about-us-page/Rostrum.svelte"
import { getRandomCategories } from "../../utils/functions/categories/getRadomsCategories"
import type { CategoryDatas } from "../../utils/functions/categories/getCategoryDatas"
import OurServices from "../../components/ui/about-us-page/OurServices.svelte"

	let randomsCategories = getRandomCategories(4) as [CategoryDatas, CategoryDatas, CategoryDatas, CategoryDatas]
	let rostrumCategories = randomsCategories.slice(0, 3) as [CategoryDatas, CategoryDatas, CategoryDatas]
	let listenCategory = randomsCategories[3]
</script>

<ClassicPageWrapper smallBorders={true}>
	<Rostrum categoriesForStyles={rostrumCategories}></Rostrum>
	<div class="separator"></div>
	<OurServices categoryForStyles={listenCategory} />
</ClassicPageWrapper>

<style lang="scss">
	.separator {
		height: 1.5rem;
	}
</style>