import type { StoryBasic } from "../../../utils/types/StoryBasic"

export const prerender = false

import { TalesCategories } from "../../../utils/enums/TalesCategories"

export const load = ({
	params,
}): {
	story: StoryBasic
} => {
	return {
		story: {
			title: "This is the story title",
			blurb: "This is the story blurb",
			type: TalesCategories.Fantasy,
			uid: params.story,
			lastChapitre: 12,
			completionRatio: 1,
		},
	}
}
