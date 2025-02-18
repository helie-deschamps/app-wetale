import { invoke } from "@tauri-apps/api/core"

export async function ping(value: string): Promise<string | null> {
	return await invoke<{ value?: string }>("plugin:utils|ping", {
		payload: {
			value,
		},
	}).then(r => (r.value ? r.value : null))
}

export async function getStatusBarHeight(): Promise<number> {
	return invoke<{ height?: number }>("plugin:utils|get_status_bar_height").then(
		r => (r.height ? r.height : 0),
	)
}

export async function getNavBarHeight(): Promise<number> {
	return invoke<{ height?: number }>("plugin:utils|get_nav_bar_height").then(
		r => (r.height ? r.height : 0),
	)
}
