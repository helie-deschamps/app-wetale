<script lang="ts">
	import getCategoryDatas from "../../../../utils/functions/categories/getCategoryDatas"
	import type { TalesCategories } from "../../../../utils/enums/TalesCategories"
	import CategoryIcon from "../CategoryIcon/CategoryIcon.svelte"
	import { touchHandlers } from "../../../../utils/component_features/touchHandlers"

	type Props = {
		category: TalesCategories
		format: "square" | "tall" | "large"
		width: number
		height: number
	}
	const {
		category = $bindable(),
		format,
		width = $bindable(),
		height = $bindable(),
	}: Props = $props()
	const { title, lowercaseTitle, colorBackground, colorText } = $derived(
		getCategoryDatas(category),
	)
</script>

<a
	href="/{lowercaseTitle}"
	aria-labelledby={`tile-${lowercaseTitle}`}
	use:touchHandlers
	class="tile {lowercaseTitle} {format}"
	style:view-transition-name="{lowercaseTitle}paganim"
	style:width={`${String(width)}px`}
	style:height={`${String(height)}px`}
	style:background-color={colorBackground}
	style:color={colorText}
>
	<span aria-hidden="true">
		<CategoryIcon {category}></CategoryIcon>
	</span>
	<p id={`tile-${lowercaseTitle}`}>{title}</p>
</a>

<style lang="scss">
	@use "/src/styles/variables/colors";

	.tile {
		display: flex;
		border-radius: 16px;
		position: relative;
		overflow: hidden;
		p {
			position: absolute;
			font-size: 25px;
			font-weight: bold;
			max-width: 80%;
		}
		span {
			position: absolute;
		}
	}

	.tall {
		grid-row: span 2;
	}
	.large {
		grid-column: span 2;
		p {
			max-width: 40%;
		}
	}

	.romance {
		p {
			top: calc(50% - 0.5em);
			left: 8px;
			text-align: right;
		}
		span {
			width: 130%;
			left: -30%;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.detective {
		p {
			top: 6px;
			right: 15px;
			text-align: right;
		}
		span {
			width: 90%;
			bottom: -25%;
		}
	}
	.sf {
		p {
			top: 13px;
			right: 10px;
			text-align: right;
		}
		span {
			width: 120%;
			bottom: -5%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.adventure {
		p {
			bottom: 26px;
			left: 26px;
			text-align: left;
		}
		span {
			width: 75%;
			right: 7%;
			top: 5%;
		}
	}
	.thriller {
		p {
			bottom: 21px;
			right: 14px;
			text-align: right;
		}
		span {
			width: 105%;
			left: -30%;
			top: -7%;
		}
	}
	.fantasy {
		p {
			bottom: 16px;
			right: 10px;
			text-align: right;
		}
		span {
			width: 120%;
			left: -28%;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
