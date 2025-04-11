<script lang="ts">
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"
	import type { Snippet } from "svelte"

	let { href, children }: { href: string; children: Snippet } = $props()
</script>

<a {href} use:touchHandlers>
	{@render children()}
</a>

<style lang="scss">
	@use "/src/styles/variables/colors";

	a {
		background-color: colors.$main-dark;
		color: colors.$main-light;
		padding: 1em;
		font-weight: 700;
		border-radius: 8px;
		border: none;
		display: block;
		text-align: center;
	}
</style>
