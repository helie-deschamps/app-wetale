<script lang="ts">
	import Lenis from "lenis"
	import { onMount, type Snippet } from "svelte"

	import "lenis/dist/lenis.css"
	import "/src/styles/reset.scss"
	import "/src/styles/base.scss"
	import { beforeNavigate, onNavigate } from "$app/navigation"
	import NavBar from "../components/ui/NavBar/NavBar.svelte"
	import Header from "../components/ui/Header/Header.svelte"
	import getTabsDatas from "../components/ui/NavBar/tabsManager/getTabsDatas"
	import { currentTab } from "../components/ui/NavBar/tabsManager/currentTab.store"
	import getCssOsBarsHeight from "../utils/functions/osInfos/getCssOsBarsHeight"
	import { navBarHeight } from "../components/ui/NavBar/NavBar.svelte"
	void import("../styles/libs/svelte-material-ui/bare.min.css")

	let { children }: { children: Snippet } = $props()

	onMount(() => {
		new Lenis({
			autoRaf: true,
		})
	})

	onMount(async () => {
		let { StatusBarHeight, NavigationBarHeight } = await getCssOsBarsHeight()
		document.body.style.paddingTop = `${String(StatusBarHeight)}px`
		document.body.style.paddingBottom = `${String(Number($navBarHeight) + NavigationBarHeight + 30)}px`
	})

	document.addEventListener("contextmenu", e => {
		e.preventDefault()
	})

	onNavigate(async navigation => {
		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	beforeNavigate(({ to }) => {
		if (to) getTabsDatas($currentTab).currentPageUri = to.url.pathname
	})
</script>

<Header />

{@render children()}

<NavBar />

<style lang="scss">
	@use "/src/styles/variables/colors";

	:global(body) {
		background-color: colors.$main-light;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
