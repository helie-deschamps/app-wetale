<script module lang="ts">
    import { defineMeta } from "@storybook/addon-svelte-csf"
    import CategoriesList from "./CategoriesList.svelte";

    const { Story } = defineMeta({
        title: "UI/CategoriesList/CategoriesList",
        component: CategoriesList,
        tags: ["autodocs", "!dev"],
        argTypes: {},
    })
</script>

<Story name="Es"/>