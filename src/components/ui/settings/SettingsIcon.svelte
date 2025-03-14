<script lang="ts">
	import FavoriteStar from "../stories/FavoriteStar/FavoriteStar.svelte"
	import { type DotLottie, DotLottieSvelte } from "@lottiefiles/dotlottie-svelte"
	import { touchHandlers } from "../../../utils/component_features/touchHandlers"

	let {
		onClick,
	}: {
		onClick: () => void
	} = $props()

	let checked = $state(false)

	const inPlay = () => {
		dotLottie?.setMode("forward")
		dotLottie?.setSpeed(2)
		dotLottie?.setFrame(0)
		dotLottie?.play()
	}
	const outPlay = () => {
		dotLottie?.setMode("reverse")
		dotLottie?.setSpeed(2)
		dotLottie?.play()
	}

	$effect(() => {
		if (checked && dotLottie?.currentFrame === 0) return void 0
		if (checked) outPlay()
		else inPlay()
	})

	const onClickLocal = () => {
		checked = !checked
		onClick()
	}

	let dotLottie: DotLottie | null = null
</script>

<button
	onclick={onClickLocal}
	class:button_flat={true}
	aria-label="Ajouter aux favoris"
	role="checkbox"
	aria-checked={checked}
	use:touchHandlers
>
	<DotLottieSvelte
		src="/lotties/settings.json"
		dotLottieRefCallback={(reference: DotLottie) => (dotLottie = reference)}
		mode={checked ? "forward" : "reverse"}
	/>
</button>

<style lang="scss">
	button {
		z-index: 2000;
		background: transparent;
		border: none;
		padding: 0;
		color: white;
	}
</style>
