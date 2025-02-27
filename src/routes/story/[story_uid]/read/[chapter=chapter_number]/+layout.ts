export const prerender = false

export const load = ({
	params,
}: {
	params: { story_uid: string; chapter: string }
}): {
	storyUid: string
	chapterNumber: number
} => {
	return {
		storyUid: params.story_uid,
		chapterNumber: Number(params.chapter),
	}
}
