<script lang="ts">
	import getCategoryDatas from "../../../../../utils/functions/getCategoryDatas"
	import type { TalesCategories } from "../../../../../utils/enums/TalesCategories"

	type Props = {
		category: TalesCategories
		format: "square" | "tall" | "large"
	}
	const { category, format }: Props = $props()
	const { title, cssClass } = getCategoryDatas(category)
</script>

<div class="tile {cssClass} {format}">
	<p>{title}</p>
</div>

<style lang="scss">
	@use "/src/styles/variables/colors";

	.tile {
		display: flex;
		width: 160px;
		height: 160px;
		border-radius: 16px;
		position: relative;
		p {
			position: absolute;
			font-size: 25px;
			font-weight: bold;
		}
	}

	.tall {
		height: 334px;
		grid-row: span 2;
	}
	.large {
		width: 334px;
		grid-column: span 2;
	}

	.romance {
		background-color: colors.$romance-background;
		color: colors.$romance-content;
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
			bottom: 13px;
			right: 10px;
			text-align: right;
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
	}
	.thriller {
		background-color: colors.$thriller-background;
		color: colors.$thriller-content;
		p {
			bottom: 21px;
			right: 14px;
			text-align: right;
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
	}
</style>
