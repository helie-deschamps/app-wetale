import { getStatusBarHeight, getNavBarHeight } from "tauri-plugin-utils-api"

type CssOsBarsHeight = {
	StatusBarHeight: number
	NavigationBarHeight: number
}

export default async function getCssOsBarsHeight(): Promise<CssOsBarsHeight> {
	return {
		StatusBarHeight: (await getStatusBarHeight()) / window.devicePixelRatio,
		NavigationBarHeight: (await getNavBarHeight()) / window.devicePixelRatio,
	}
}
