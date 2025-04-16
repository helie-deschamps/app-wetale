<script lang="ts">
	import CircularProgress from "@smui/circular-progress"

	export let text: string = ""
	export let color: string | null = null
	export let noMargin: boolean = false
</script>

<div
	class="loading"
	style:--mdc-theme-primary={color ?? "black"}
	style:margin-top={noMargin ? "0" : "4em"}
>
	<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	{#if text !== ""}
		<i>{text}</i>
	{/if}
</div>

<style lang="scss">
	.loading {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
