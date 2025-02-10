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

	function hashToAngle(str: string): number {
		let hash = 0
		for (let i = 0; i < str.length; i++) {
			hash = (hash * 31 + str.charCodeAt(i)) >>> 0 // 31 est un nombre premier souvent utilisé
		}
		let normalized = hash / 0xffffffff
		return normalized * Math.PI * 2
	}
	function getTransform(str: string) {
		const angle = hashToAngle(str)
		const translateX = Math.cos(angle) * 10 // de -20% à 20%
		const translateY = Math.sin(angle) * 10 // de -20% à 20%

		return `rotate(${angle}rad) translate(${translateX}%, ${translateY}%)`
	}

	let transform = getTransform(stringForRotation)
</script>

<span
	class:icon={true}
	style={`background-color: ${getCategoryDatas(type).colorBackground};`}
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
