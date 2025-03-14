<script lang="ts">
	import BackButton from "./buttons/BackButton.svelte"
	import TextSizeSelect from "../settings/TextSizeSelect.svelte"
	import SettingsIcon from "../settings/SettingsIcon.svelte"
	import ReadSettings from "../stories/read/ReadSettings.svelte"

	let {
		height = $bindable(),
		textSizeMultiplier = $bindable(),
		darkTheme = $bindable(),
		font = $bindable(),
		interlignes = $bindable(),
		isSettingOpen = $bindable(),
	}: {
		height: number
		textSizeMultiplier: number
		darkTheme: boolean
		font: "'Inter'" | "'Comic Neue'" | "system-ui"
		interlignes: number
		isSettingOpen: boolean
	} = $props()
</script>

<header bind:offsetHeight={height}>
	<BackButton />
	<div>
		<TextSizeSelect bind:textSizeMultiplier />
		<SettingsIcon onClick={() => (isSettingOpen = !isSettingOpen)} />
	</div>
	<ReadSettings
		bind:textSizeMultiplier
		bind:darkTheme
		bind:font
		bind:interlignes
		bind:isOpen={isSettingOpen}
		headerHeight={height}
	/>
</header>

<style lang="scss">
	@use "/src/styles/variables/colors";

	header {
		z-index: 1000;
		position: absolute;
		width: calc(100% - 68px);
		background-color: #1a191d;
		margin: 16px 14px 0;
		border-radius: 16px;
		padding: 11px 20px 11px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #f7f0e6;
		view-transition-name: header;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	:global(::view-transition-group(header)) {
		z-index: 1000;
	}
</style>
