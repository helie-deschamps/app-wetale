import { load, Store } from "@tauri-apps/plugin-store"
import { get, writable, type Writable } from "svelte/store"

/**
 * **eMail**: string (email)
 * **username**: string
 * **jwToken**: string (JWT)
 * **jwTExpiration**: number (timestamp)
 * **subscriptionPlan**: 0 | 1 | 2 (cf. enum SubscriptionPlans)
 */
export const currentUser: Writable<Store | undefined> = writable()

export const initCurrentUser = async () => {
	currentUser.set(await load("stores/current_user.json", { autoSave: false }))
}

export const disconnectCurrentUser = async () => {
	const currentUserStore = get(currentUser)
	await currentUserStore?.clear()
	await currentUserStore?.save()
}
