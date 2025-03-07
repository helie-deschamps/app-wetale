<script lang="ts">
	import { touchHandlers } from "../../../../utils/component_features/touchHandlers"
	import {
		type DotLottie,
		DotLottieSvelte,
	} from "@lottiefiles/dotlottie-svelte"

	let {
		checked = $bindable(),
	}: {
		checked: boolean
	} = $props()

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

	const onclick = () => {
		checked = !checked
	}

	let dotLottie: DotLottie | null = null
</script>

<button
	class:button_flat={true}
	aria-label="Ajouter aux favoris"
	role="checkbox"
	aria-checked={true}
	{onclick}
	use:touchHandlers
>
	<DotLottieSvelte
		src="/lotties/star.lottie"
		dotLottieRefCallback={(reference: DotLottie) => (dotLottie = reference)}
		mode={checked ? "forward" : "reverse"}
	/>
</button>

<style lang="scss">
	button {
		padding-left: 0.4rem;
		width: 27px;
		height: 27px;
		display: block;
	}
</style>
