import type { User } from "../../types/User"
import { currentUser } from "../../stores/currentUser"
import { get } from "svelte/store"

export default function createUser(
	username: string,
	password: string,
): null | User {
	let user: User | null = null

	user = {
		eMail: username,
		jwToken: password,
		jwTExpiration: Date.now() + 3600 * 1000, // 1 hour
	}

	if (user) {
		void (async () => {
			const currentUserStore = get(currentUser)
			await currentUserStore?.set("eMail", user.eMail)
			await currentUserStore?.set("jwToken", user.jwToken)
			await currentUserStore?.set("jwTExpiration", user.jwTExpiration)
			await currentUserStore?.save()
		})()
	}

	return user
}
