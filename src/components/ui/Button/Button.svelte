<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"

	type Props =
		| {
				isSubmit?: false
				children: Snippet
				onTap?: () => void
				tabindex?: number
		  }
		| {
				isSubmit: true
				children: Snippet
				onTap?: () => void
				tabindex?: number
		  }
	let { isSubmit = false, children, onTap, tabindex }: Props = $props()
</script>

{#if isSubmit}
	<input
		type="submit"
		value={"Se connecter"}
		onclick={onTap}
		{tabindex}
		use:touchHandlers
	/>
{:else}
	<button onclick={onTap} use:touchHandlers>
		{@render children()}
	</button>
{/if}

<style lang="scss">
	@use "/src/styles/variables/colors";

	button,
	input {
		background-color: colors.$main-dark;
		color: colors.$main-light;
		padding: 1em;
		width: 100%;
		font-weight: 700;
		text-transform: uppercase;
		border-radius: 8px;
		border: none;
	}
</style>
