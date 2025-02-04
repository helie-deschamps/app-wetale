<script>
	import CategoriesList from "../components/ui/categories/CategoriesList/CategoriesList.svelte"
	import { headerHeight } from "../components/ui/Header/Header.svelte"
</script>

<main style={`padding-top: ${($headerHeight ?? 0) + 32}px`}>
	<CategoriesList />
</main>

<style lang="scss">
	@use "/src/styles/variables/colors";

	main {
		padding: 30px;
	}
</style>
