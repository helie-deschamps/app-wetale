export const prerender = false

export const load = ({
	params,
}: {
	params: { story_uid: string }
}): {
	storyUid: string
} => {
	return {
		storyUid: params.story_uid,
	}
}
