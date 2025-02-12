<script>
	import CategoryTilePreview from "./CategoryTilePreview.svelte"
	import { TalesCategories } from "../../../../utils/enums/TalesCategories"
	import SectionTitle from "../../sections/SectionTitle.svelte"

	let gridWith = $state()
	let tileSide = $derived(gridWith / 2 - 7)
</script>

<div>
	<SectionTitle text="Catégories" />
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
	.grid {
		display: grid;
		grid-column-gap: 14px;
		grid-row-gap: 14px;
	}
</style>
