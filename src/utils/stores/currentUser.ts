import { load, Store } from "@tauri-apps/plugin-store"
import { writable, type Writable } from "svelte/store"

/**
 * **eMail**: string (email)
 * **jwToken**: string (JWT)
 * **jwTExpiration**: number (timestamp)
 */
export const currentUser: Writable<Store | undefined> = writable()

export const initCurrentUser = async () => {
	currentUser.set(await load("stores/current_user.json", { autoSave: false }))
}
