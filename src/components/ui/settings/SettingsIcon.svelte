<script lang="ts">
	import FavoriteStar from "../stories/FavoriteStar/FavoriteStar.svelte"

	let {
		onClick,
	}: {
		onClick: () => void
	} = $props()
</script>

<button onclick={onClick}><FavoriteStar checked /></button>

<style lang="scss">
	button {
		z-index: 2000;
		background: transparent;
		border: none;
		padding: 0;
		color: white;
	}
</style>
