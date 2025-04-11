<script lang="ts">
	import { TalesCategories } from "../../../../utils/enums/TalesCategories"
	import getCategoryDatas, { type CategoryDatas } from "../../../../utils/functions/categories/getCategoryDatas"

	type Properties = {
		categoryData: CategoryDatas
		category?: null
	} | {
		categoryData?: null
		category: TalesCategories
	}
	const {
		category = $bindable(null),
		categoryData = null
	}: Properties = $props()
	const { lowercaseTitle } = $derived(categoryData ?? getCategoryDatas(category as TalesCategories))
</script>

{#if lowercaseTitle === "romance"}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 76 79"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={lowercaseTitle}
	>
		<path
			d="M5.66517 28.1371C0.555627 53.6092 26.1361 70.0406 39.565 74C54.6316 59.9772 81.1947 27.7742 66.9142 11.1448C52.6337 -5.48461 42.7312 15.5441 39.565 28.1371C30.394 17.5238 10.7747 2.66512 5.66517 28.1371Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if lowercaseTitle === "detective"}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 75 80"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={lowercaseTitle}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M50.1329 13.1771C44.5906 10.9469 32.9929 8.80304 23.4696 20.4516C18.9496 25.9803 18.5951 31.6491 20.062 36.7161C21.6115 42.0686 25.1813 46.5524 28.0038 48.6767C29.2849 49.6408 30.1029 51.102 30.2575 52.7024C30.4121 54.3028 29.8891 55.8947 28.8165 57.0883L9.92361 78.1123C7.81592 80.4577 4.21439 80.6429 1.87935 78.5258C-0.455695 76.4087 -0.640006 72.7912 1.46768 70.4457L16.6406 53.5614C13.5054 49.9697 10.6677 45.2438 9.12385 39.9109C6.76876 31.7759 7.41575 22.0589 14.6662 13.1903C28.6839 -3.9556 46.539 -0.59494 54.369 2.55579C69.2277 8.53481 79.5401 24.9136 72.9905 44.0518C69.728 53.5851 63.5602 59.2298 57.1817 62.1254C51.0727 64.8987 44.6292 65.2058 40.3815 63.9609C37.3618 63.076 35.628 59.8998 36.5091 56.8667C37.3901 53.8335 40.5522 52.0921 43.5719 52.977C44.8934 53.3643 48.5397 53.4924 52.4902 51.699C56.1712 50.0279 60.0326 46.7181 62.218 40.3323C66.5644 27.6322 60.0376 17.1627 50.1329 13.1771Z"
		/>
	</svg>
{:else if lowercaseTitle === "sf"}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 102 69"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={lowercaseTitle}
	>
		<path
			d="M32.0448 38.2035C18.8538 44.1659 -5.63346 31.6316 10.0998 11.987C25.8331 -7.6575 44.0766 18.7487 51.2317 34.4074C55.9885 47.9308 70.1068 72.2255 88.5263 61.217C106.946 50.2084 92.0039 28.832 75.3353 28.832C71.5778 27.1317 57.6594 26.6255 32.0448 38.2035Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if lowercaseTitle === "adventure"}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 102 72"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={lowercaseTitle}
	>
		<path
			d="M96.5334 5.37517L4.89138 12.5394C24.7819 15.4501 34.9101 19.7138 41.6106 29.1007C48.9304 39.3551 41.2659 58.6763 35.0125 67.2136L96.5334 5.37517Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if lowercaseTitle === "thriller"}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 88 75"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={lowercaseTitle}
	>
		<path
			d="M39.1964 69.861C23.7445 71.06 -4.13528 65.0216 7.96038 31.2767C20.056 -2.46828 44.5132 3.74655 60.1312 9.69559C70.4324 13.6194 89.0411 26.3065 81.066 45.664C73.0908 65.0216 45.3993 57.2176 32.5504 50.8958C24.0768 46.7268 16.9219 29.9988 39.1964 24.5735C55.9775 20.4861 58.9128 29.9131 55.9775 38.9608"
			stroke-width="9"
			stroke-linecap="round"
		/>
	</svg>
{:else if lowercaseTitle === "fantasy"}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 94 91"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={lowercaseTitle}
	>
		<path
			d="M58.6484 5C48.8047 41.4089 35.8438 34.9026 5 34.9026C41.0938 41.6389 38.8219 67.4341 35.8438 86C41.0938 53.2714 73.4688 52.428 89 56.0974C59.2062 45.845 52.2518 28.6592 58.6484 5Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/if}

<style lang="scss">
	@use "/src/styles/variables/colors";

	.romance {
		path {
			stroke: colors.$romance-content;
		}
	}
	.detective {
		path {
			fill: colors.$detective-content;
		}
	}
	.sf {
		path {
			stroke: colors.$sf-content;
		}
	}
	.adventure {
		path {
			stroke: colors.$adventure-content;
		}
	}
	.thriller {
		path {
			stroke: colors.$thriller-content;
		}
	}
	.fantasy {
		path {
			stroke: colors.$fantasy-content;
		}
	}
</style>
