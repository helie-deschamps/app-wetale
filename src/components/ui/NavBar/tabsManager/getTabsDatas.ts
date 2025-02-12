import { Tabs } from "./Tabs.enum"

type tabDataType = {
	basePageUri: string
	currentPageUri: string
}

export const tabDatas: { [key in Tabs]: tabDataType } = {
	[Tabs.Home]: {
		basePageUri: "/",
		currentPageUri: "/",
	},
	[Tabs.Library]: {
		basePageUri: "/",
		currentPageUri: "/",
	},
	[Tabs.Favorite]: {
		basePageUri: "/",
		currentPageUri: "/",
	},
}

export default function (tab: Tabs): tabDataType {
	return tabDatas[tab]
}
