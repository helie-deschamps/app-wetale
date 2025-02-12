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
		height: 312px;
		position: sticky;
		top: 0;
		background-size: cover;
		background-position: center;
	}

	main {
		position: relative;
		padding: 32px 30px 0 30px;
		border-radius: 52px 0 0 0/ 45px 0 0 0;
		margin-top: -52px;
		background-color: colors.$main-light;
		&:after {
			content: "";
			position: absolute;
			top: -52px;
			right: 0;
			width: 45px;
			height: 52px;
			background-color: colors.$main-light;
			mask-image: radial-gradient(
				ellipse at left top,
				transparent 45px,
				black 46px
			);
		}
	}
</style>
