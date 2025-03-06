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
		basePageUri: "/subscribe",
		currentPageUri: "/subscribe",
	},
}

export default function getTabsDatas(tab: Tabs): tabDataType {
	return tabDatas[tab]
}
