<script lang="ts">
	import CircularProgress from "@smui/circular-progress"

	let {
		text,
	}: {
		text: string
	} = $props()
</script>

<div class="loading">
	<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	<i>{text}</i>
</div>

<style lang="scss">
	.loading {
		display: flex;
		align-items: center;
		margin-top: 4em;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
