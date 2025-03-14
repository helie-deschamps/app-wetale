import { load, Store } from "@tauri-apps/plugin-store"
import { writable, type Writable } from "svelte/store"

/**
 * **textSizeMultiplier**: number (ex: 1.2)
 * **darkTheme**: boolean
 * **font**: "'Inter'" | "'Comic Neue'" | "system-ui"
 * **interlignes**: number (ex: 140)
 */
export const userPrefs: Writable<Store | undefined> = writable()

export const initUserPrefs = async () => {
	userPrefs.set(await load("stores/user_prefs.json", { autoSave: false }))
}
