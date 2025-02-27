import type { Action } from "svelte/action"

function ontouchstart(event: TouchEvent) {
	const element = event.currentTarget as HTMLElement
	element.style.scale = "0.88"
}

function ontouchend(event: TouchEvent) {
	const element = event.currentTarget as HTMLElement
	element.style.scale = "1"
}

export const touchHandlers: Action = node => {
	node.addEventListener("touchstart", ontouchstart, { passive: false })
	node.addEventListener("touchend", ontouchend)
	node.addEventListener("touchcancel", ontouchend)

	if (node.style.transition == "") node.style.transition = "scale 0.1s"
	else node.style.transition += ", scale 0.1s"
}
