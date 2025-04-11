<script lang="ts">
	import type { CategoryDatas } from "../../../utils/functions/categories/getCategoryDatas"
	import SectionTitle from "../sections/SectionTitle.svelte"
	import CategoryIcon from "../categories/CategoryIcon/CategoryIcon.svelte"

	let {
		categoryForStyles,
	}: {
		categoryForStyles: CategoryDatas
	} = $props()
</script>

<div class="container">
	<SectionTitle text="Nos services :" />
	<p>
		Chez WETALE, nous redéfinissons la lecture en vous offrant des services
		interactifs et immersifs, où chaque utilisateur devient un acteur clé dans
		la création d’histoires captivantes.
	</p>
	<ul>
		<li style:background-color={categoryForStyles.colorBackground ?? "#fff"}>
			<div>
				<span>Votez</span>
				<p>pour la suite que vous souhaitez voir</p>
			</div>
		</li>
		<li style:background-color={categoryForStyles.colorBackground ?? "#fff"}>
			<div>
				<span>Téléchargez</span>
				<p>les chapitres en avance dès leur sorties</p>
			</div>
		</li>
		<li style:background-color={categoryForStyles.colorBackground ?? "#fff"}>
			<span class="icon">
				<CategoryIcon categoryData={categoryForStyles} />
			</span>
			<div>
				<span>Ecoutez</span>
				<p>vos chapitres au lieu de les lire</p>
			</div>
		</li>
		<li style:background-color={categoryForStyles.colorBackground ?? "#fff"}>
			<div>
				<span>Lisez</span>
				<p>
					de nouveaux chapitres chaque jour sur chaque thème , <b
						><a href="register">incrivez-vous</a></b
					>
					pour voter et profitez d’encore plus de fonctionnalités en vous
					<b>abonnant</b>.
				</p>
			</div>
		</li>
	</ul>
</div>

<style lang="scss">
	@use "../../../styles/variables/colors";

	a {
		color: inherit;
	}

	.container {
		display: flex;
		flex-direction: column;
		padding: 2rem 10px;
	}
	p {
		margin-bottom: 1rem;
	}
	ul {
		list-style: none;
		display: flex;
		padding: 0;
		justify-content: stretch;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 0 1rem;
		align-items: stretch;
		li {
			flex: 0 0 calc(50% - 0.5rem);
			border-radius: 16px;
			position: relative;
			overflow: hidden;
			.icon {
				position: absolute;
				bottom: 0;
				transform: translateY(40%);
				width: 140%;
			}
			div {
				position: relative;
				background-color: colors.$main-light;
				border-radius: 16px;
				border: 3px solid colors.$main-dark;
				padding: 12px 6px;
				font-size: 0.95em;
				text-align: center;
				box-sizing: border-box;
				span {
					font-weight: bold;
					display: block;
				}
				p {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
