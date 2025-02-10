<script lang="ts">
	const { completionRatio }: { completionRatio: number } = $props()
</script>

<div
	class="wrapper"
	role="progressbar"
	aria-valuenow={completionRatio}
	aria-valuemin="0"
	aria-valuemax="100"
>
	<div class="circleComplete"></div>
	<div class="circleBkg">
		<div class="circleBkgInner"></div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 72px;
		height: 72px;
		border-radius: 37px;
		position: relative;
	}
	.circleComplete {
		position: absolute;
	}
	.circleBkg {
		width: 100%;
		height: 100%;
		background-color: #d9d9d9;
		border-radius: 50%;
		position: absolute;
	}
	.circleBkgInner {
		width: calc(100% - 20px);
		margin: 10px;
		height: calc(100% - 20px);
		background-color: #f7f0e6;
		border-radius: 50%;
	}
</style>
