import type { User } from "../../types/User"
import { currentUser, isUserConnected } from "../../stores/currentUser"
import { get } from "svelte/store"
import { SubscriptionPlans } from "../../enums/SubscriptionPlans"

function generateUsername(): string {
	return "rat noir"
}

export default function createUser(
	email: string,
	password: string,
): null | User {
	let user: User | null = null

	user = {
		eMail: email,
		jwToken: password,
		jwTExpiration: Date.now() + 3600 * 1000, // 1 hour
	}

	if (user) {
		void (async () => {
			const currentUserStore = get(currentUser)
			await currentUserStore?.set("eMail", user.eMail)
			await currentUserStore?.set("jwToken", user.jwToken)
			await currentUserStore?.set("jwTExpiration", user.jwTExpiration)
			await currentUserStore?.set("username", generateUsername())
			await currentUserStore?.set("subscriptionPlan", SubscriptionPlans.Free)
			await currentUserStore?.save()
			isUserConnected.set(true)
		})()
	}

	return user
}
