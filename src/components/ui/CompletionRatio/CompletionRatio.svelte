<script lang="ts">
	/**
	 * CompletionRatio Un nombre allant de 0 à 100 (0 correspond à 0%, 100 correspond à 100% de complétion)
	 */
	let { completionRatio, color }: { completionRatio: number; color: string } =
		$props()
</script>

<div
	class="wrapper"
	role="progressbar"
	aria-valuenow={completionRatio}
	aria-valuemin="0"
	aria-valuemax="100"
>
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		xml:space="preserve"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
	>
		<g transform="matrix(9.33333,0,0,8.28169,-34,-58.2535)">
			<ellipse
				cx="9"
				cy="13.071"
				rx="4.5"
				ry="5.071"
				style="fill:none;stroke:rgb(217,217,217);stroke-width:1.13px;"
			/>
		</g>
		<g transform="matrix(-3.82857e-16,-1,1,-3.82857e-16,49.5,50.5)">
			<circle
				cx="0.5"
				cy="0.5"
				r="42"
				style="fill:none;stroke:{color};stroke-width:10px;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:{completionRatio *
					2.6},1000;stroke-dashoffset:0;"
			/>
		</g>
	</svg>
</div>

<style lang="scss">
	.wrapper {
		width: 72px;
		height: 72px;
		border-radius: 37px;
		position: relative;
	}
	svg {
		position: absolute;
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
