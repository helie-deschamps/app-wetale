<script>
	import TextInput from "../../components/ui/forms/TextInput/TextInput.svelte"
	import Button from "../../components/ui/Button/Button.svelte"

	let username = $state("")
	let password = $state("")
</script>

<div>
	<form>
		<h2>Connectez-vous !</h2>
		<TextInput
			category="email"
			placeholder="Votre addresse mail"
			bind:value={username}
			required={true}
			tabindex={1}
			icon="email"
		/>
		<TextInput
			category="password"
			placeholder="Votre mot de passe"
			bind:value={password}
			required={true}
			tabindex={2}
			icon="password"
		/>
		<a href="/forgotpassword">Mot de passe oublié</a>
		<Button isSubmit={true} tabindex={3}>Se connecter</Button>
	</form>
	<div>
		<div></div>
		<p>Ou</p>
		<div></div>
	</div>
	<div>
		<button>Se connecter avec Google</button>
		<button>Se connecter avec Facebook</button>
		<p>Vous n'avez pas de compte ? <a href="/inscription">Inscrivez-vous</a></p>
	</div>
</div>

<style lang="scss">
	h2 {
		margin-bottom: 1em;
		text-transform: uppercase;
		width: 100%;
		text-align: center;
		font-weight: 900;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	a {
		padding: 0.3em 1em 0.9em 1em;
		margin-bottom: 0.7em;
	}
</style>
