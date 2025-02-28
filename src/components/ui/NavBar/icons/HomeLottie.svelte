<script lang="ts">
	import { Tabs } from "../tabsManager/Tabs.enum"
	import { currentTab } from "../tabsManager/currentTab.store"
	import changeTab from "../tabsManager/changeTab"
	import {
		type DotLottie,
		DotLottieSvelte,
	} from "@lottiefiles/dotlottie-svelte"

	let isCurrent = $state<boolean>($currentTab === Tabs.Home)

	currentTab.subscribe(value => {
		isCurrent = value === Tabs.Home
	})

	const inPlay = () => {
		dotLottie?.setMode("forward")
		dotLottie?.setSpeed(2.3)
		dotLottie?.setFrame(0)
		dotLottie?.play()
	}
	const outPlay = () => {
		dotLottie?.setMode("reverse")
		dotLottie?.setSpeed(3)
		dotLottie?.play()
	}

	$effect(() => {
		if (!isCurrent && dotLottie?.currentFrame === 0) return void 0
		if (isCurrent) inPlay()
		else outPlay()
	})

	let dotLottie: DotLottie | null = null
</script>

<button onclick={() => changeTab(Tabs.Home)} aria-label="Home">
	<DotLottieSvelte
		src="/home.lottie"
		dotLottieRefCallback={(reference: DotLottie) => (dotLottie = reference)}
		mode={isCurrent ? "reverse" : "forward"}
	/>
</button>

<style>
	button {
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
		width: 36px;
		height: 36px;
	}
</style>
