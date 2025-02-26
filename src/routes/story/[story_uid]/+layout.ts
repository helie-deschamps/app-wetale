export const prerender = false

export const load = ({
	params,
}): {
	storyUid: string
} => {
	return {
		storyUid: params.story_uid,
	}
}
