<script lang="ts">
	import { onDestroy, onMount, type Snippet } from "svelte"
	let {
		children,
		viewTransitionName,
		backgroundImageUri,
	}: {
		children: Snippet
		viewTransitionName: string
		backgroundImageUri: string
	} = $props()

	let blurState = $state<number>(0)

	const onscroll = () => {
		const scrollPosition = document.documentElement.scrollTop
		blurState = scrollPosition / 50
	}

	onMount(() => {
		globalThis.addEventListener("scroll", onscroll)
	})
	onDestroy(() => {
		globalThis.removeEventListener("scroll", onscroll)
	})
</script>

<div
	class:image={true}
	style:background-image={`url(${backgroundImageUri})`}
	style:filter={`blur(${String(blurState)}px)`}
	style:view-transition-name="image-from-wrapper"
></div>
<main style:view-transition-name={viewTransitionName}>
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
  :global(::view-transition-group(romancepaganim)),
  :global(::view-transition-group(detectivepaganim)),
  :global(::view-transition-group(sfpaganim)),
  :global(::view-transition-group(adventurepaganim)),
  :global(::view-transition-group(thrillerpaganim)),
  :global(::view-transition-group(fantasypaganim))
   {
    z-index: 755;
  }
</style>
