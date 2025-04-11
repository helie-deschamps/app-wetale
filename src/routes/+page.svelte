<script>
	import CategoriesList from "../components/ui/categories/CategoriesList/CategoriesList.svelte"
	import ClassicPageWrapper from "../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import LinkButtonified from "../components/ui/Button/LinkButtonified.svelte"
</script>

<ClassicPageWrapper>
	<CategoriesList />
	<div class="separator"></div>
	<LinkButtonified href="/about-us">
		WeTale :<br />A propos de nous
	</LinkButtonified>
</ClassicPageWrapper>

<style lang="scss">
	.separator {
		height: 40px;
	}
</style>
