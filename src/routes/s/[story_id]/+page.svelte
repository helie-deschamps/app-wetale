<script lang="ts">
	import { navBar } from "../../../utils/stores/navBar"
	import { onMount } from "svelte"
	import { Spring } from "svelte/motion"

	let { data } = $props()
	let { storyID, StoryTitle, storyBody, StoryCategory } = data

	let navBarYPosition = 0
	let navBarYWoundedPosition = 0
	let oldScroll = 0
	const onScrollDiv = (e: Event) => {
		if ($navBar === undefined) return
		const newScroll = window.scrollY
		const scrollDiff = oldScroll - newScroll
		oldScroll = newScroll
		navBarYWoundedPosition = Math.max(Math.min((navBarYWoundedPosition + scrollDiff), 0),-100 )
		$navBar.style.translate = `0 ${navBarYWoundedPosition}px`

		if (scrollDiff > 0) {
			//$navBar.style.translate = `0 0`
		} else {
			console.error("descend")
			//$navBar.style.translate = `0 ${scrollDiff * 3}px`
		}
	}
	console.log($navBar)
	onMount(() => {
		document.body.onscroll = onScrollDiv
	})
</script>

<div>
	<h1>Story {storyID}</h1>
	<p>{storyBody}</p>
</div>

<style lang="scss">
</style>
