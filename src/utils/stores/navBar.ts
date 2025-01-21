import { type Writable, writable } from "svelte/store"

export const navBar: Writable<HTMLElement | undefined> = writable(undefined)
