<script lang="ts">
	import { Tabs } from "../tabsManager/Tabs.enum"
	import { currentTab } from "../tabsManager/currentTab.store"
	import changeTab from "../tabsManager/changeTab"

	let isCurrent = $state<boolean>($currentTab === Tabs.Home)

	currentTab.subscribe(value => (isCurrent = value === Tabs.Home))
</script>

<button
	onclick={() => {
		if (!isCurrent) changeTab(Tabs.Home)
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
				d="M8.6001 16.3C9.42852 16.3 10.1001 16.9716 10.1001 17.8V32H25.3001V17.8C25.3001 16.9716 25.9717 16.3 26.8001 16.3C27.6285 16.3 28.3001 16.9716 28.3001 17.8V33.5C28.3001 34.3284 27.6285 35 26.8001 35H8.6001C7.77167 35 7.1001 34.3284 7.1001 33.5V17.8C7.1001 16.9716 7.77167 16.3 8.6001 16.3Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16.7246 8.86051C17.286 8.37983 18.114 8.37983 18.6755 8.86051L31.8755 20.1605C32.5048 20.6992 32.5783 21.6462 32.0395 22.2755C31.5008 22.9048 30.5539 22.9782 29.9246 22.4395L17.7 11.9746L5.4755 22.4395C4.84618 22.9782 3.89927 22.9048 3.36053 22.2755C2.82179 21.6462 2.89523 20.6992 3.52455 20.1605L16.7246 8.86051Z"
				fill="white"
			/>
			<path
				d="M21.8 32.9H18.2001C17.7001 32.9 17.3 32.5 17.3 32V24.5C17.3 24 17.7001 23.6 18.2001 23.6H21.8C22.3 23.6 22.7001 24 22.7001 24.5V32C22.7001 32.5 22.3 32.9 21.8 32.9Z"
				fill="white"
			/>
			<path
				d="M10.4 10.1C9.6 10.1 9 10.7 9 11.5V15.2C9 16 9.6 16.6 10.4 16.6C11.2 16.6 11.8 16 11.8 15.2V11.5C11.8 10.8 11.2 10.1 10.4 10.1Z"
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
				d="M8.6001 16.3C9.42852 16.3 10.1001 16.9716 10.1001 17.8V32H25.3001V17.8C25.3001 16.9716 25.9717 16.3 26.8001 16.3C27.6285 16.3 28.3001 16.9716 28.3001 17.8V33.5C28.3001 34.3284 27.6285 35 26.8001 35H8.6001C7.77167 35 7.1001 34.3284 7.1001 33.5V17.8C7.1001 16.9716 7.77167 16.3 8.6001 16.3Z"
				fill="white"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16.7246 8.86051C17.286 8.37983 18.114 8.37983 18.6755 8.86051L31.8755 20.1605C32.5048 20.6992 32.5783 21.6462 32.0395 22.2755C31.5008 22.9048 30.5539 22.9782 29.9246 22.4395L17.7 11.9746L5.4755 22.4395C4.84618 22.9782 3.89927 22.9048 3.36053 22.2755C2.82179 21.6462 2.89523 20.6992 3.52455 20.1605L16.7246 8.86051Z"
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
