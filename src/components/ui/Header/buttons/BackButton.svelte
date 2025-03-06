<script lang="ts">
	const goBack = () => {
		history.back()
	}
</script>

<button on:click={goBack} aria-label="Retour">
	<svg
		width="30"
		height="20"
		viewBox="0 0 30 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1 9.80005C1 8.97162 1.67157 8.30005 2.5 8.30005H27.8C28.6284 8.30005 29.3 8.97162 29.3 9.80005C29.3 10.6285 28.6284 11.3 27.8 11.3H2.5C1.67157 11.3 1 10.6285 1 9.80005Z"
			fill="#F7F0E6"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M11.0732 0.452042C11.652 1.04476 11.6407 1.99444 11.048 2.57321L3.64703 9.8L11.048 17.0268C11.6407 17.6056 11.652 18.5552 11.0732 19.148C10.4944 19.7407 9.54476 19.752 8.95204 19.1732L0.452041 10.8732C0.162978 10.591 0 10.204 0 9.8C0 9.39599 0.162978 9.00905 0.452041 8.72679L8.95204 0.42679C9.54476 -0.151982 10.4944 -0.140676 11.0732 0.452042Z"
			fill="#F7F0E6"
		/>
	</svg>
</button>

<style lang="css">
	svg {
		display: block;
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}
</style>
