<script lang="ts">
	import Lenis from "lenis"
	import { onMount, type Snippet } from "svelte"

	import "lenis/dist/lenis.css"
	import "/src/styles/reset.scss"
	import "/src/styles/base.scss"
	import {onNavigate} from "$app/navigation";

	let { children }: { children: Snippet } = $props()

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		})

		lenis.on("scroll", e => {
			console.log(e)
		})
	})
	document.addEventListener("contextmenu", e => e.preventDefault())

	onNavigate(async (navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<header>
	<a href="/">Home</a>
	<a href="/login">Connection</a>
</header>

{@render children()}

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
