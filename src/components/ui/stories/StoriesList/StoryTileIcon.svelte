<script lang="ts">
	import getCategoryDatas from "../../../../utils/functions/categories/getCategoryDatas"
	import CategoryIcon from "../../categories/CategoryIcon/CategoryIcon.svelte"
	import type { TalesCategories } from "../../../../utils/enums/TalesCategories"

	const {
		stringForRotation,
		hadToRotateIcon = true,
		type,
	}: {
		stringForRotation: string
		type: TalesCategories
		hadToRotateIcon?: boolean
	} = $props()

	function hashToAngle(string_: string): number {
		let hash = 0
		for (let index = 0; index < string_.length; index++) {
			hash = (hash * 31 + (string_.codePointAt(index) ?? 0)) >>> 0
		}
		let normalized = hash / 0xff_ff_ff_ff
		return normalized * Math.PI * 2
	}
	function getSmallAngle(previusAngle: number): number {
		const minRad = -15 * (Math.PI / 180) // ≈ -0.26
		const maxRad = 15 * (Math.PI / 180) // ≈ 0.26
		const range = maxRad - minRad
		const normalizedSmall = (previusAngle % (2 * Math.PI)) / (2 * Math.PI) // entre 0 et 1
		return minRad + normalizedSmall * range
	}
	function getTransform(string_: string, hadToRotate: boolean = true): string {
		const angleForCalc = hashToAngle(string_)
		const translateX = Math.cos(angleForCalc) * 10 // de -20% à 20%
		const translateY = Math.sin(angleForCalc) * 10 // de -20% à 20%

		const angle = hadToRotate ? angleForCalc : getSmallAngle(angleForCalc)

		return `rotate(${String(angle)}rad) translate(${String(translateX)}%, ${String(translateY)}%)`
	}

	let transform = getTransform(stringForRotation, hadToRotateIcon)
</script>

<span
	class:icon={true}
	style={`background-color: ${getCategoryDatas(type).colorBackground ?? "transparent"}`}
>
	<span
		class:iconRotator={true}
		style={`
	transform: ${transform};
	`}
	>
		<CategoryIcon category={type} />
	</span>
</span>

<style lang="scss">
	.icon {
		width: 74px;
		overflow: hidden;
		flex-shrink: 0;
	}
	.iconRotator {
		width: 80%;
		margin: 0 auto;
		display: block;
		height: 100%;
	}
</style>
