<script lang="ts">
	import Lenis from "lenis"
	import { onMount, type Snippet } from "svelte"
	import { platform } from "@tauri-apps/plugin-os"

	import "lenis/dist/lenis.css"
	import "/src/styles/reset.scss"
	import "/src/styles/base.scss"
	import { onNavigate } from "$app/navigation"
	import NavBar from "../components/ui/NavBar/NavBar.svelte"
	import Header from "../components/ui/Header/Header.svelte"

	let { children }: { children: Snippet } = $props()

	onMount(() => {
		new Lenis({
			autoRaf: true,
		})

		if (window.__TAURI_OS_PLUGIN_INTERNALS__ && platform() === "android") {
			if (window.visualViewport)
				document.body.style.paddingTop = `${window.screen.height - window.visualViewport.height}px`
			else document.body.style.paddingTop = "25px"
		}
	})

	document.addEventListener("contextmenu", e => e.preventDefault())

	onNavigate(async navigation => {
		if (!document.startViewTransition) return

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
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
