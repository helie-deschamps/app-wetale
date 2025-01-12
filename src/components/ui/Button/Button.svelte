<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import {
		ontouchend,
		ontouchstart,
	} from "../../../utils/functions/touchHandlers"

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
		{ontouchstart}
		{ontouchend}
	/>
{:else}
	<button onclick={onTap} {ontouchstart} {ontouchend}>
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
		transition: transform 0.1s;
	}
</style>
