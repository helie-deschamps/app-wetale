<script lang="ts">
	import getCategoryDatas from "../../../../../utils/functions/getCategoryDatas"
	import type { TalesCategories } from "../../../../../utils/enums/TalesCategories"
	import CategoryIcon from "../../CategoryIcon/CategoryIcon.svelte"
	import {
		ontouchend,
		ontouchstart,
	} from "../../../../../utils/functions/touchHandlers"

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
	const { title, lowercaseTitle } = $derived(getCategoryDatas(category))
</script>

<a
	href="/{lowercaseTitle}"
	style:view-transition-name="{lowercaseTitle}paganim"
	{ontouchstart}
	{ontouchend}
	class="tile {lowercaseTitle} {format}"
	style:width={`${width}px`}
	style:height={`${height}px`}
>
	<span aria-hidden="true">
		<CategoryIcon {category}></CategoryIcon>
	</span>
	<p>{title}</p>
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
			max-width: 135px;
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
	}

	.romance {
		background-color: colors.$romance-background;
		color: colors.$romance-content;
		p {
			top: calc(50% - 0.5em);
			left: 8px;
			text-align: right;
		}
		span {
			width: 201px;
			left: -40px;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.detective {
		background-color: colors.$detective-background;
		color: colors.$detective-content;
		p {
			top: 6px;
			right: 15px;
			text-align: right;
		}
	}
	.sf {
		background-color: colors.$sf-background;
		color: colors.$sf-content;
		p {
			top: 13px;
			right: 10px;
			text-align: right;
		}
		span {
			width: 179px;
			left: -11px;
			bottom: -12px;
		}
	}
	.adventure {
		background-color: colors.$adventure-background;
		color: colors.$adventure-content;
		p {
			bottom: 26px;
			left: 26px;
			text-align: left;
		}
		span {
			width: 244px;
			right: 26px;
			top: 12px;
		}
	}
	.thriller {
		background-color: colors.$thriller-background;
		color: colors.$thriller-content;
		p {
			bottom: 21px;
			right: 14px;
			text-align: right;
		}
		span {
			width: 160px;
			left: -40px;
			top: -8px;
		}
	}
	.fantasy {
		background-color: colors.$fantasy-background;
		color: colors.$fantasy-content;
		p {
			bottom: 16px;
			right: 10px;
			text-align: right;
		}
		span {
			width: 201px;
			left: -60px;
			top: -26px;
		}
	}
</style>
