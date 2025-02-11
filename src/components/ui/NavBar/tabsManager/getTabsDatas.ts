import { Tabs } from "./Tabs.enum"

type tabDataType = {
	currentPageUri: string
}

export const tabDatas: { [key in Tabs]: tabDataType } = {
	[Tabs.Home]: {
		currentPageUri: "/",
	},
	[Tabs.Library]: {
		currentPageUri: "/",
	},
	[Tabs.Favorite]: {
		currentPageUri: "/",
	},
}

export default function (tab: Tabs): tabDataType {
	return tabDatas[tab]
}
