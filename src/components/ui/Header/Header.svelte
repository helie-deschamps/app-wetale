<script module lang="ts">
	import { type Writable, writable } from "svelte/store"
	export const header: Writable<HTMLElement | undefined> = writable()
	export const headerHeight: Writable<number | undefined> = writable()
</script>

<script lang="ts">
	import Logo from "../brand/Logo/Logo.svelte"
	import { isUserConnected } from "../../../utils/stores/currentUser"

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
	<a
		href={$isUserConnected ? "/my-account" : "/register"}
		aria-label="Mon compte"
	>
		{#if $isUserConnected}
			<svg
				width="31"
				height="38"
				viewBox="0 0 31 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6.45987 18.5105C6.71987 19.3005 6.28987 20.1405 5.49987 20.4005L2.08987 21.5205C1.29987 21.7805 0.459873 21.3505 0.199873 20.5605C-0.0601271 19.7705 0.369873 18.9305 1.15987 18.6705L4.56987 17.5505C5.35987 17.2905 6.19987 17.7205 6.45987 18.5105Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.0601042 10.97C0.300104 10.18 1.1301 9.73001 1.9301 9.96001L5.3701 10.99C6.1601 11.23 6.6101 12.06 6.3801 12.86C6.1401 13.65 5.3101 14.1 4.5101 13.87L1.0701 12.84C0.280104 12.6 -0.169896 11.77 0.0601042 10.97Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5.7602 3.10983C6.4202 2.59983 7.3602 2.71983 7.8602 3.37983L10.0202 6.16983C10.5302 6.82983 10.4102 7.76983 9.7502 8.26983C9.0902 8.77983 8.1502 8.65983 7.6502 7.99983L5.4902 5.20983C4.9802 4.54983 5.1002 3.60983 5.7602 3.10983Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.1701 0.000112149C16.0001 -0.00988785 16.6801 0.650112 16.6901 1.48011L16.7401 4.96011C16.7501 5.79011 16.0901 6.47011 15.2601 6.48011C14.4301 6.49011 13.7501 5.83011 13.7401 5.00011L13.6901 1.52011C13.6801 0.690112 14.3401 0.0101121 15.1701 0.000112149Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24.6601 2.87003C25.3301 3.36003 25.4801 4.30003 24.9901 4.97003L22.9202 7.81003C22.4302 8.48003 21.4902 8.63003 20.8202 8.14003C20.1502 7.65003 20.0002 6.71003 20.4902 6.04003L22.5601 3.20003C23.0501 2.53003 23.9901 2.38003 24.6601 2.87003Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M30.59 10.5798C30.85 11.3698 30.42 12.2098 29.63 12.4698L26.23 13.5898C25.44 13.8498 24.6 13.4198 24.34 12.6298C24.08 11.8398 24.51 10.9998 25.3 10.7398L28.7 9.61979C29.49 9.35979 30.33 9.7898 30.59 10.5798Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24.4205 18.2898C24.6605 17.4998 25.4905 17.0498 26.2905 17.2798L29.7305 18.3098C30.5205 18.5498 30.9705 19.3798 30.7405 20.1798C30.5105 20.9798 29.6705 21.4198 28.8705 21.1898L25.4305 20.1598C24.6405 19.9198 24.1905 19.0898 24.4205 18.2898Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.5303 10.7202C12.6103 10.7202 10.5703 12.8902 10.5703 15.1702C10.5703 17.4502 12.6103 19.6202 15.5303 19.6202C18.4503 19.6202 20.4903 17.4502 20.4903 15.1702C20.4903 12.8902 18.4503 10.7202 15.5303 10.7202ZM7.57031 15.1702C7.57031 11.0702 11.1303 7.72021 15.5303 7.72021C19.9303 7.72021 23.4903 11.0702 23.4903 15.1702C23.4903 19.2702 19.9303 22.6202 15.5303 22.6202C11.1303 22.6202 7.57031 19.2702 7.57031 15.1702Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.4101 23.0103C10.1601 23.0103 5.90014 27.2703 5.90014 32.5203V34.0203V34.2203H24.9301V32.5203C24.9301 27.2703 20.6701 23.0103 15.4201 23.0103H15.4101ZM2.99014 31.0203H2.89014V34.7703C2.89014 36.1403 4.00014 37.2203 5.34014 37.2203H25.4701C26.8401 37.2203 27.9201 36.1103 27.9201 34.7703V32.5203C27.9201 25.6103 22.3201 20.0103 15.4101 20.0103C9.01014 20.0103 3.73014 24.8203 2.99014 31.0203Z"
					fill="#1A1A1E"
				/>
			</svg>
		{:else}
			<svg
				width="31"
				height="38"
				viewBox="0 0 31 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.5303 10.7202C12.6103 10.7202 10.5703 12.8902 10.5703 15.1702C10.5703 17.4502 12.6103 19.6202 15.5303 19.6202C18.4503 19.6202 20.4903 17.4502 20.4903 15.1702C20.4903 12.8902 18.4503 10.7202 15.5303 10.7202ZM7.57031 15.1702C7.57031 11.0702 11.1303 7.72021 15.5303 7.72021C19.9303 7.72021 23.4903 11.0702 23.4903 15.1702C23.4903 19.2702 19.9303 22.6202 15.5303 22.6202C11.1303 22.6202 7.57031 19.2702 7.57031 15.1702Z"
					fill="#1A1A1E"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.4101 23.0103C10.1601 23.0103 5.90014 27.2703 5.90014 32.5203V34.0203V34.2203H24.9301V32.5203C24.9301 27.2703 20.6701 23.0103 15.4201 23.0103H15.4101ZM2.99014 31.0203H2.89014V34.7703C2.89014 36.1403 4.00014 37.2203 5.34014 37.2203H25.4701C26.8401 37.2203 27.9201 36.1103 27.9201 34.7703V32.5203C27.9201 25.6103 22.3201 20.0103 15.4101 20.0103C9.01014 20.0103 3.73014 24.8203 2.99014 31.0203Z"
					fill="#1A1A1E"
				/>
			</svg>
		{/if}
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
