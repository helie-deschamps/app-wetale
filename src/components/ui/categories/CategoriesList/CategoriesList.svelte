<script>
	import CategoryTilePreview from "./CategoryTilePreview/CategoryTilePreview.svelte"
	import { TalesCategories } from "../../../../utils/enums/TalesCategories"

	let gridWith = $state()
	let tileSide = $derived(gridWith / 2 - 7)
</script>

<div>
	<h2>Catégories</h2>
	<div
		class="grid"
		bind:clientWidth={gridWith}
		style:grid-template-columns={`repeat(2, ${tileSide}px)`}
		style:grid-template-rows={`repeat(auto-fill, ${tileSide}px)`}
	>
		<CategoryTilePreview
			category={TalesCategories.Romance}
			format="tall"
			width={tileSide}
			height={tileSide * 2 + 14}
		/>
		<CategoryTilePreview
			category={TalesCategories.Detective}
			format="square"
			width={tileSide}
			height={tileSide}
		/>
		<CategoryTilePreview
			category={TalesCategories.ScienceFiction}
			format="square"
			width={tileSide}
			height={tileSide}
		/>
		<CategoryTilePreview
			category={TalesCategories.Adventure}
			format="large"
			width={tileSide * 2 + 14}
			height={tileSide}
		/>
		<CategoryTilePreview
			category={TalesCategories.Thriller}
			format="square"
			width={tileSide}
			height={tileSide}
		/>
		<CategoryTilePreview
			category={TalesCategories.Fantasy}
			format="square"
			width={tileSide}
			height={tileSide}
		/>
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
		grid-column-gap: 14px;
		grid-row-gap: 14px;
	}
</style>
