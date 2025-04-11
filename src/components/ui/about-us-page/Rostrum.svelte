<script lang="ts">
	import type { CategoryDatas } from "../../../utils/functions/categories/getCategoryDatas"
	import CategoryIcon from "../categories/CategoryIcon/CategoryIcon.svelte"

	let {
		categoriesForStyles,
	}: {
		categoriesForStyles: [CategoryDatas, CategoryDatas, CategoryDatas]
	} = $props()
</script>

<ol>
	<li
		style={`background-color: ${categoriesForStyles[0].colorBackground ?? "#fff"};`}
	>
		<span class="icon">
			<CategoryIcon categoryData={categoriesForStyles[0]} />
		</span>
		<p>
			<span class="number">1</span>
			Choissisez une histoire qui vous intéresse et... lisez !
		</p>
	</li>
	<li
		style={`background-color: ${categoriesForStyles[1].colorBackground ?? "#fff"};`}
	>
		<span class="icon">
			<CategoryIcon categoryData={categoriesForStyles[1]} />
		</span>
		<p>
			<span class="number">2</span>
			Votez pour la suite de l’histoire que vous préférez pour apporter votre patte
			à l’histoire
		</p>
	</li>
	<li
		style={`background-color: ${categoriesForStyles[2].colorBackground ?? "#fff"};`}
	>
		<span class="icon">
			<CategoryIcon categoryData={categoriesForStyles[2]} />
		</span>
		<p>
			<span class="number">3</span>
			Attendez le lendemain pour découvrir la suite de l’histoire.
		</p>
	</li>
</ol>

<style lang="scss">
	@use "../../../styles/variables/colors";

	ol {
		list-style: none;
		display: flex;
		padding: 0;
		gap: 6px;
		justify-content: stretch;
		align-items: center;
		li {
			position: relative;
			border-radius: 16px;
			padding-top: 55px;
			flex: 1;
			overflow: hidden;
			.icon {
				z-index: 0;
				position: absolute;
				width: 70%;
				top: -5px;
				left: 10%;
				height: fit-content;
			}
			p {
				position: relative;
				z-index: 1;
				.number {
					font-size: 2rem;
					font-weight: 900;
					color: colors.$main-dark;
					background-color: colors.$main-light;
					border-radius: 50%;
					margin-bottom: 6px;
					text-align: center;
					display: block;
				}
				background-color: colors.$main-light;
				color: colors.$main-dark;
				border-radius: 16px;
				border: 3px solid colors.$main-dark;
				padding: 12px 6px;
				font-size: 0.95em;
			}
		}
	}
</style>
