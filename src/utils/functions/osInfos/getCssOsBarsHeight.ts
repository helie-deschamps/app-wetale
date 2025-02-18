import { getStatusBarHeight, getNavBarHeight } from "tauri-plugin-utils-api"

type CssOsBarsHeight = {
	StatusBarHeight: number
	NavigationBarHeight: number
}

let cachedCssOsBarsHeight: CssOsBarsHeight | null = null

export default async function getCssOsBarsHeight(): Promise<CssOsBarsHeight> {
	return (
		cachedCssOsBarsHeight ??
		(cachedCssOsBarsHeight = {
			StatusBarHeight: (await getStatusBarHeight()) / window.devicePixelRatio,
			NavigationBarHeight: (await getNavBarHeight()) / window.devicePixelRatio,
		})
	)
}
