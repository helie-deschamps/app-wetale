import { load, Store } from "@tauri-apps/plugin-store"
import { writable, type Writable } from "svelte/store"

export const userPrefs: Writable<Store | undefined> = writable()

export const initUserPrefs = async () => {
	userPrefs.set(await load("stores/user_prefs.json", { autoSave: false }))
}
