<script>
	import { page } from "$app/state"
	import TextInput from "../../components/ui/forms/TextInput/TextInput.svelte"
	import Button from "../../components/ui/Button/Button.svelte"
	import { fade, fly } from "svelte/transition"
	import GoogleOAuthButton from "../../components/ui/connections/OAuthButton/GoogleOAuthButton/GoogleOAuthButton.svelte"
	import FacebookOAuthButton from "../../components/ui/connections/OAuthButton/FacebookOAuthButton/FacebookOAuthButton.svelte"

	let username = $state(page.url.searchParams.get("email") ?? "")
	let password = $state("")
</script>

<div class:global_container={true} out:fade>
	<div class:login_container={true} in:fly={{ y: 200 }} out:fly={{ y: 200 }}>
		<form>
			<h2>Connectez-vous !</h2>
			<TextInput
				category="email"
				placeholder="Votre addresse mail"
				bind:value={username}
				defaultValue={page.url.searchParams.get("email") ?? undefined}
				required={true}
				tabindex={1}
				icon="email"
				autoComplete="username"
			/>
			<TextInput
				category="password"
				placeholder="Votre mot de passe"
				bind:value={password}
				required={true}
				tabindex={2}
				icon="password"
				autoComplete="current-password"
			/>
			<Button isSubmit={true} tabindex={3}>Se connecter</Button>
		</form>
		<hr class:separator={true} />
		<div>
			<GoogleOAuthButton />
			<div style:height=".8em"></div>
			<FacebookOAuthButton />
			<div style:height=".4em"></div>
			<p class:lastLink={true}>
				Vous n'avez pas de compte ? <a href="/inscription">Inscrivez-vous</a>
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use "/src/styles/variables/colors";

	.global_container {
		display: flex;
		align-items: center;
		height: 100vh;
		background-color: #d9d9d9;
	}
	.login_container {
		background-color: colors.$main-light;
		width: 100%;
		padding: 21px 21px 15px;
		border-radius: 50px;
	}
	h2 {
		margin-bottom: 48px;
		text-transform: uppercase;
		width: 100%;
		text-align: center;
		font-weight: 900;
		font-size: 2em;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		:global(div:has(> input)) {
			margin-bottom: 13px;
		}
		:global(input[type="submit"]) {
			margin-top: 27px;
		}
	}
	.separator {
		border: none;
		border-top: 2px solid #cfdfe2;
		color: #294957;
		overflow: visible;
		text-align: center;
		margin: 31px 0 23px 0;
		height: 0;
		&::before {
			content: "Ou";
			position: relative;
			top: -0.7em;
			background-color: colors.$main-light;
			padding: 0 16px;
		}
	}
	.lastLink {
		text-align: center;
		a {
			padding: 0.3em 0 0.6em 0;
			margin-bottom: 0.7em;
		}
	}
</style>
