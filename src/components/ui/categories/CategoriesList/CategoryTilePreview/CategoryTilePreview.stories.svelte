<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import CategoryTilePreview from "./CategoryTilePreview.svelte"
	import { TalesCategories } from "../../../../../utils/enums/TalesCategories"

	const { Story } = defineMeta({
		title: "UI/CategoriesList/CategoryTilePreview",
		component: CategoryTilePreview,
		tags: ["autodocs"],
		argTypes: {
			category: {
				//@ts-ignore
				options: TalesCategories,
				control: {
					type: "select",
				},
			},
			format: { control: "select", options: ["square", "tall", "large"] },
			width: { control: "number" },
			height: { control: "number" },
		},
	})
</script>

<Story
	name="Romance"
	args={{
		category: TalesCategories.Romance,
		format: "tall",
		width: 200,
		height: 200,
	}}
/>
<Story
	name="Detective"
	args={{
		category: TalesCategories.Detective,
		format: "square",
		width: 200,
		height: 200,
	}}
/>
<Story
	name="ScienceFiction"
	args={{
		category: TalesCategories.ScienceFiction,
		format: "square",
		width: 200,
		height: 200,
	}}
/>
<Story
	name="Adventure"
	args={{
		category: TalesCategories.Adventure,
		format: "large",
		width: 200,
		height: 200,
	}}
/>
<Story
	name="Thriller"
	args={{
		category: TalesCategories.Thriller,
		format: "square",
		width: 200,
		height: 200,
	}}
/>
<Story
	name="Fantasy"
	args={{
		category: TalesCategories.Fantasy,
		format: "square",
		width: 200,
		height: 200,
	}}
/>
