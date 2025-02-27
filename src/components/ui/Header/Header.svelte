<script module lang="ts">
	import { type Writable, writable } from "svelte/store"
	export const header: Writable<HTMLElement | undefined> = writable(undefined)
	export const headerHeight: Writable<number | undefined> = writable(undefined)
</script>

<script lang="ts">
	import Logo from "../brand/Logo/Logo.svelte"

	let localHeader: HTMLElement | undefined = $state()
	let localHeaderHeight: number | undefined = $state()

	$effect(() => {
		header.set(localHeader)
	})
	$effect(() => {
		headerHeight.set(localHeaderHeight)
	})
</script>

<header bind:this={localHeader} bind:offsetHeight={localHeaderHeight}>
	<Logo />
	<a href="/login" aria-label="Mon compte">
		<svg
			role="img"
			aria-label="Se connecter"
			width="23"
			height="27"
			viewBox="0 0 23 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.5893 7.44868C17.5893 10.6414 14.7918 13.3974 11.1269 13.3974C7.46206 13.3974 4.66455 10.6414 4.66455 7.44868C4.66455 4.25598 7.46206 1.5 11.1269 1.5C14.7918 1.5 17.5893 4.25598 17.5893 7.44868Z"
				stroke="#1A191D"
				stroke-width="3"
			/>
			<mask id="path-2-inside-1_261_948" fill="white">
				<path
					d="M0 23.8026C0 17.7202 4.93076 12.7894 11.0132 12.7894C17.0956 12.7894 22.0263 17.7202 22.0263 23.8026V26.0526C22.0263 26.5758 21.6022 27 21.0789 27H0.947369C0.424152 27 0 26.5758 0 26.0526V23.8026Z"
				/>
			</mask>
			<path
				d="M0 23.8026C0 17.7202 4.93076 12.7894 11.0132 12.7894C17.0956 12.7894 22.0263 17.7202 22.0263 23.8026V26.0526C22.0263 26.5758 21.6022 27 21.0789 27H0.947369C0.424152 27 0 26.5758 0 26.0526V23.8026Z"
				stroke="#1A191D"
				stroke-width="6"
				mask="url(#path-2-inside-1_261_948)"
			/>
		</svg>
	</a>
</header>

<style lang="scss">
	@use "/src/styles/variables/colors";

	header {
		z-index: 1000;
		position: absolute;
		width: calc(100% - 50px);
		background-color: colors.$main-light;
		margin: 16px 14px 0;
		border-radius: 16px;
		padding: 11px 16px 11px 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view-transition-name: header;
	}
	:global(::view-transition-group(header)) {
		z-index: 1000;
	}
</style>
