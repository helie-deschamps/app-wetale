<script lang="ts">
	import SectionTitle from "../../components/ui/sections/SectionTitle.svelte"
	import {
		currentUser,
		disconnectCurrentUser,
	} from "../../utils/stores/currentUser.js"
	import ClassicPageWrapper from "../../components/ui/pageWrappers/ClassicPageWrapper.svelte"
	import { goto } from "$app/navigation"
	import { SubscriptionPlans } from "../../utils/enums/SubscriptionPlans"
	import PriceTile from "../../components/ui/subscribe/PriceTile.svelte"
	import { getRandomCategories } from "../../utils/functions/categories/getRadomsCategories"
	import type { CategoryDatas } from "../../utils/functions/categories/getCategoryDatas"
	import CategoryIcon from "../../components/ui/categories/CategoryIcon/CategoryIcon.svelte"

	let email = $state("")
	let username = $state("")
	let subscriptionPlan = $state<SubscriptionPlans | undefined>()
	let password = $state("......")

	const [categoryForTheme] = getRandomCategories(1) as [CategoryDatas]

	void (async () => {
		email = (await $currentUser?.get("eMail")) ?? ""
		username = (await $currentUser?.get("username")) ?? ""
		subscriptionPlan = (await $currentUser?.get(
			"subscriptionPlan",
		)) as SubscriptionPlans
	})()
	function disconnect() {
		void disconnectCurrentUser().then(() => goto("/login"))
	}
</script>

<ClassicPageWrapper>
	<section>
		<div class="title-div">
			<SectionTitle text="Mon compte" withMargin={false} />
			<button class="delete-account" onclick={disconnect}>
				Supprimer mon compte
			</button>
		</div>
		<div class="user-datas-div">
			<div class="artwork" style:background={categoryForTheme.colorBackground}>
				<div style:--rotation={categoryForTheme.couldBeRotated ? `${String(Math.random() * 360)  }deg` : "0deg"}>
					<CategoryIcon categoryData={categoryForTheme} />
				</div>
			</div>
			<div class="inputs-div">
				<label>
					<span>Pseudonyme</span>
					<input type="text" bind:value={username} disabled={true} />
				</label>
				<label>
					<span>Adresse mail</span>
					<input type="email" bind:value={email} disabled={true} />
				</label>
				<label>
					<span>Mot de passe</span>
					<input type="password" bind:value={password} disabled={true} />
				</label>
			</div>
		</div>
	</section>
	{#if subscriptionPlan || subscriptionPlan === SubscriptionPlans.Free}
		<section>
			<SectionTitle text="Votre Abonnement" />
			<PriceTile
				onTap={() => {}}
				color="#7C1430"
				textColor="white"
				markerColor="#E94F1D"
				title="Interactif"
				argues={[
					"Possibilité de voter",
					"Accès aux chapitres quotidiens",
					"Expérience communautaire",
					"Accès aux nombreuses fonctionnalités (favoris, bibliothèque..)",
				]}
				withButton={subscriptionPlan !== SubscriptionPlans.Interactif}
			/>
			<PriceTile
				onTap={() => {}}
				color="#F8BE3F"
				textColor="black"
				markerColor="white"
				title="Immersif"
				argues={[
					"Voter pour influencer l’histoire",
					"Écouter les récits",
					"Accès aux chapitres quotidiens",
					"Accès aux nombreuses fonctionnalités (favoris, bibliothèque..)",
					"Expérience communautaire",
				]}
				withButton={subscriptionPlan !== SubscriptionPlans.Immersif}
			/>
			<p>
				Les abonnements étant pris par période d’un mois, le résiliement de
				votre abonnement lui donnera fin au premier du mois suivant.
			</p>
		</section>
	{/if}
</ClassicPageWrapper>

<style lang="scss" global>
	section:not(:last-child) {
		margin-bottom: 2rem;
	}
	.title-div {
		display: flex;
		justify-content: space-around;
		align-items: center;
    .delete-account {
      background: transparent;
      border: none;
      color: #ff0000;
      font-weight: 550;
    }
	}
	.user-datas-div {
    margin-top: 1rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
    .artwork {
			display: block;
      min-height: 100%;
			flex: 1;
			border-radius: 16px;
			overflow: hidden;
			div {
				width: 135%;
				transform: translate(-20%, -10%) rotate(var(--rotation));
			}
    }
		.inputs-div {
			flex: 2;
			display: flex;
			flex-direction: column;
			label:not(:first-child) {
        margin-top: .45em;
			}
			span {
				display: block;
				font-weight: 520;
			}
			input {
				display: block;
        width: -webkit-fill-available;
        width: fill-available;
				padding: .6em;
				font-size: 1.02em;
        font-weight: 520;
				border-radius: 6px;
				border: none;
				&:disabled {
					background: #ffffff;
					color: black;
				}
			}
		}
	}
</style>
