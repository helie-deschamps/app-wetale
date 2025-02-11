import { type Writable, writable } from "svelte/store"
import { Tabs } from "./Tabs.enum"

export const currentTab: Writable<Tabs> = writable(Tabs.Home)
