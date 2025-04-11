<script lang="ts">
import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
import Rostrum from "../../components/ui/Rostrum/Rostrum.svelte"
import { getRandomCategories } from "../../utils/functions/categories/getRadomsCategories"
import type { CategoryDatas } from "../../utils/functions/categories/getCategoryDatas"

	let randomsCategories = getRandomCategories(4) as [CategoryDatas, CategoryDatas, CategoryDatas, CategoryDatas]
	let rostrumCategories = randomsCategories.slice(0, 3) as [CategoryDatas, CategoryDatas, CategoryDatas]
	//let listenCategory = randomsCategories[3]
</script>

<ClassicPageWrapper smallBorders={true}>
	<Rostrum categoriesForStyles={rostrumCategories}></Rostrum>
</ClassicPageWrapper>
