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
		},
	})
</script>

<Story
	name="Romance"
	args={{ category: TalesCategories.Romance, format: "tall" }}
/>
<Story
	name="Detective"
	args={{ category: TalesCategories.Detective, format: "square" }}
/>
<Story
	name="ScienceFiction"
	args={{ category: TalesCategories.ScienceFiction, format: "square" }}
/>
<Story
	name="Adventure"
	args={{ category: TalesCategories.Adventure, format: "large" }}
/>
<Story
	name="Thriller"
	args={{ category: TalesCategories.Thriller, format: "square" }}
/>
<Story
	name="Fantasy"
	args={{ category: TalesCategories.Fantasy, format: "square" }}
/>
