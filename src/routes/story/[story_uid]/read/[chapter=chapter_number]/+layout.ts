export const prerender = false

export const load = ({
	params,
}): {
	storyUid: string
	chapterNumber: number
} => {
	return {
		storyUid: params.story_uid,
		chapterNumber: Number(params.chapter),
	}
}
