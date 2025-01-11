<script>
	import CategoriesList from "../components/ui/categories/CategoriesList/CategoriesList.svelte"
</script>

<main>
	<h1>Wetale</h1>
	<CategoriesList />
</main>

<style lang="scss">
	@use "/src/styles/variables/colors";

	h1 {
		color: colors.$adventure-background;
	}
</style>
