import type { Action } from "svelte/action"

function ontouchstart(event: TouchEvent) {
	const element = event.currentTarget as HTMLElement
	if (!element) return
	element.style.transform = "scale(0.88)"
}

function ontouchend(event: TouchEvent) {
	const element = event.currentTarget as HTMLElement
	if (!element) return
	element.style.transform = "scale(1)"
}

export const touchHandlers: Action<HTMLElement> = node => {
	node.addEventListener("touchstart", ontouchstart)
	node.addEventListener("touchend", ontouchend)
	node.addEventListener("touchcancel", ontouchend)

	if (node.style.transition == "") node.style.transition = "transform 0.1s"
	else node.style.transition += ", transform 0.1s"
}
