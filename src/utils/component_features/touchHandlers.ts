export function ontouchstart(event: TouchEvent) {
	const element = event.currentTarget as HTMLElement
	if (!element) return
	element.style.transform = "scale(0.88)"
}

export function ontouchend(event: TouchEvent) {
	const element = event.currentTarget as HTMLElement
	if (!element) return
	element.style.transform = "scale(1)"
}
