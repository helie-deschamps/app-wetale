import { Tabs } from "./Tabs.enum"
import { currentTab } from "./currentTab.store"
import { goto } from "$app/navigation"
import getTabsDatas from "./getTabsDatas"
import { get } from "svelte/store"

export default async function (tab: Tabs): Promise<void> {
	if (get(currentTab) === tab) return await goto(getTabsDatas(tab).basePageUri)
	currentTab.set(tab)
	await goto(getTabsDatas(tab).currentPageUri)
}
