<script lang="ts">
	import getCategoryDatas from "../../../../utils/functions/categories/getCategoryDatas"
	import CategoryIcon from "../../categories/CategoryIcon/CategoryIcon.svelte"
	import type { TalesCategories } from "../../../../utils/enums/TalesCategories"

	const {
		stringForRotation,
		type,
	}: {
		stringForRotation: string
		type: TalesCategories
	} = $props()

	function hashToAngle(string_: string): number {
		let hash = 0
		for (let index = 0; index < string_.length; index++) {
			hash = (hash * 31 + (string_.codePointAt(index) ?? 0)) >>> 0
		}
		let normalized = hash / 0xff_ff_ff_ff
		return normalized * Math.PI * 2
	}
	function getTransform(string_: string) {
		const angle = hashToAngle(string_)
		const translateX = Math.cos(angle) * 10 // de -20% à 20%
		const translateY = Math.sin(angle) * 10 // de -20% à 20%

		return `rotate(${String(angle)}rad) translate(${String(translateX)}%, ${String(translateY)}%)`
	}

	let transform = getTransform(stringForRotation)
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
