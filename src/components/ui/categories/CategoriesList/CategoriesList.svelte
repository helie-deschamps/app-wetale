<script>
	import CategoryTilePreview from "./CategoryTilePreview/CategoryTilePreview.svelte"
	import { TalesCategories } from "../../../../utils/enums/TalesCategories"
</script>

<div>
	<h2>Categories</h2>
	<div class="grid">
		<CategoryTilePreview category={TalesCategories.Adventure} format="tall" />
		<CategoryTilePreview category={TalesCategories.Detective} format="square" />
		<CategoryTilePreview category={TalesCategories.Fantasy} format="square" />
		<CategoryTilePreview category={TalesCategories.Romance} format="large" />
		<CategoryTilePreview
			category={TalesCategories.ScienceFiction}
			format="square"
		/>
		<CategoryTilePreview category={TalesCategories.Thriller} format="square" />
	</div>
</div>

<style>
	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 160px);
		grid-template-rows: repeat(auto-fill, 160px);
		grid-column-gap: 14px;
		grid-row-gap: 14px;
	}
</style>
