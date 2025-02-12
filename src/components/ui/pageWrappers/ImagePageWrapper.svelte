<script lang="ts">
	import { navBarHeight } from "../../ui/NavBar/NavBar.svelte"
	import type { Snippet } from "svelte"
	let {
		children,
		viewTransitionName,
		backgroundImageUri,
	}: {
		children: Snippet
		viewTransitionName: string
		backgroundImageUri: string
	} = $props()
</script>

<div
	class:image={true}
	style:background-image={`url(${backgroundImageUri})`}
></div>
<main
	style:view-transition-name={viewTransitionName}
	style:padding-bottom={`${($navBarHeight ?? 0) + 60}px`}
>
	{@render children()}
</main>

<style lang="scss">
	@use "/src/styles/variables/colors";

	.image {
		height: 312px; // 52px pour le border
		position: sticky;
		top: 0;
		background-size: cover;
		background-position: center;
	}

	main {
		clip-path: polygon(
			0 104px,
			45px 52px,
			calc(100% - 45px) 52px,
			100% 0,
			100% 100%,
			0 100%
		);
		padding: 83px 30px 0 30px; // 52px pour le border
		margin-top: -104px;
		z-index: 10000;
		background-color: colors.$main-light;
	}
</style>
