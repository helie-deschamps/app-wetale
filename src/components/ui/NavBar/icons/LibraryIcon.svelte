<script lang="ts">
	import { Tabs } from "../tabsManager/Tabs.enum"
	import { currentTab } from "../tabsManager/currentTab.store"
	import changeTab from "../tabsManager/changeTab"

	let isCurrent = $state<boolean>($currentTab === Tabs.Library)

	currentTab.subscribe(value => (isCurrent = value === Tabs.Library))
</script>

<button
	onclick={() => {
		void changeTab(Tabs.Library)
	}}
>
	{#if isCurrent}
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.2 7.50494C10.2 6.67378 10.8715 6 11.7 6H16.2C17.0284 6 17.7 6.67378 17.7 7.50494V33.3899C17.7 34.2211 17.0284 34.8949 16.2 34.8949H11.7C10.8715 34.8949 10.2 34.2211 10.2 33.3899V7.50494ZM13.2 9.00988V31.885H14.7V9.00988H13.2Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1 15.431C1 14.5998 1.67157 13.926 2.5 13.926H7C7.82843 13.926 8.5 14.5998 8.5 15.431V33.3899C8.5 34.2211 7.82843 34.8949 7 34.8949H2.5C1.67157 34.8949 1 34.2211 1 33.3899V15.431ZM4 16.9359V31.885H5.5V16.9359H4Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M19.9109 14.9701C19.6322 14.1874 20.0387 13.3262 20.8188 13.0465L25.0565 11.5276C25.8366 11.2479 26.695 11.6558 26.9737 12.4385L33.6015 31.0512C33.8802 31.8339 33.4738 32.6951 32.6936 32.9747L28.4559 34.4937C27.6758 34.7733 26.8174 34.3655 26.5387 33.5828L19.9109 14.9701ZM23.2407 15.3746L28.8592 31.1529L30.2718 30.6466L24.6532 14.8683L23.2407 15.3746Z"
				fill="white"
			/>
		</svg>
	{:else}
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17.3809 7.5076C17.3809 6.67497 18.0524 6 18.8809 6H23.3809C24.2093 6 24.8809 6.67497 24.8809 7.5076V33.4382C24.8809 34.2709 24.2093 34.9458 23.3809 34.9458H18.8809C18.0524 34.9458 17.3809 34.2709 17.3809 33.4382V7.5076ZM20.3809 9.01519V31.9306H21.8809V9.01519H20.3809Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.41256 32.9711C2.63242 32.691 2.22594 31.8283 2.50466 31.0442L8.5269 14.1023C8.80561 13.3182 9.66398 12.9097 10.4441 13.1898L14.6818 14.7115C15.4619 14.9916 15.8684 15.8543 15.5897 16.6384L9.56745 33.5803C9.28873 34.3644 8.43037 34.7729 7.65023 34.4928L3.41256 32.9711ZM5.83443 30.6389L7.24699 31.1461L12.2599 17.0437L10.8474 16.5365L5.83443 30.6389Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M26.5808 13.538C26.5808 12.7054 27.2524 12.0304 28.0808 12.0304H32.5808C33.4092 12.0304 34.0808 12.7054 34.0808 13.538V33.3377C34.0808 34.1704 33.4092 34.8453 32.5808 34.8453H28.0808C27.2524 34.8453 26.5808 34.1704 26.5808 33.3377V13.538ZM29.5808 15.0456V31.8302H31.0808V15.0456H29.5808Z"
				fill="white"
			/>
		</svg>
	{/if}
</button>

<style>
	button {
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
	}
	svg {
		display: block;
	}
</style>
