<script lang="ts">
	import { TalesCategories } from "../../../../utils/enums/TalesCategories"
	import getCategoryDatas from "../../../../utils/functions/getCategoryDatas"

	type Props = {
		category: TalesCategories
	}
	const { category = $bindable() }: Props = $props()
	const { cssClass } = $derived(getCategoryDatas(category))
</script>

{#if category === TalesCategories.Romance}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 76 79"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={cssClass}
	>
		<path
			d="M5.66517 28.1371C0.555627 53.6092 26.1361 70.0406 39.565 74C54.6316 59.9772 81.1947 27.7742 66.9142 11.1448C52.6337 -5.48461 42.7312 15.5441 39.565 28.1371C30.394 17.5238 10.7747 2.66512 5.66517 28.1371Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if category === TalesCategories.Detective}
	<svg> </svg>
{:else if category === TalesCategories.ScienceFiction}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 102 69"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={cssClass}
	>
		<path
			d="M32.0448 38.2035C18.8538 44.1659 -5.63346 31.6316 10.0998 11.987C25.8331 -7.6575 44.0766 18.7487 51.2317 34.4074C55.9885 47.9308 70.1068 72.2255 88.5263 61.217C106.946 50.2084 92.0039 28.832 75.3353 28.832C71.5778 27.1317 57.6594 26.6255 32.0448 38.2035Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if category === TalesCategories.Adventure}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 102 72"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={cssClass}
	>
		<path
			d="M96.5334 5.37517L4.89138 12.5394C24.7819 15.4501 34.9101 19.7138 41.6106 29.1007C48.9304 39.3551 41.2659 58.6763 35.0125 67.2136L96.5334 5.37517Z"
			stroke-width="9"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if category === TalesCategories.Thriller}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 88 75"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={cssClass}
	>
		<path
			d="M39.1964 69.861C23.7445 71.06 -4.13528 65.0216 7.96038 31.2767C20.056 -2.46828 44.5132 3.74655 60.1312 9.69559C70.4324 13.6194 89.0411 26.3065 81.066 45.664C73.0908 65.0216 45.3993 57.2176 32.5504 50.8958C24.0768 46.7268 16.9219 29.9988 39.1964 24.5735C55.9775 20.4861 58.9128 29.9131 55.9775 38.9608"
			stroke-width="9"
			stroke-linecap="round"
		/>
	</svg>
{:else if category === TalesCategories.Fantasy}
	<svg
		width="100%"
		height="auto"
		viewBox="0 0 94 91"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={cssClass}
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
			stroke: colors.$detective-content;
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
