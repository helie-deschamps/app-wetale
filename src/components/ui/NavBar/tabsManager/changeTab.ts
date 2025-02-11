import { Tabs } from "./Tabs.enum"
import { currentTab } from "./currentTab.store"
import { goto } from "$app/navigation"
import getTabsDatas from "./getTabsDatas"

export default async function (tab: Tabs): Promise<undefined> {
	currentTab.set(tab)
	await goto(getTabsDatas(tab).currentPageUri)
}
