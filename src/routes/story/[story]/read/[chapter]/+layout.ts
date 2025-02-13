import type { Chapter } from "../../../../../utils/types/Chapter"
import type { StoryBasic } from "../../../../../utils/types/StoryBasic"
import { TalesCategories } from "../../../../../utils/enums/TalesCategories"

export const prerender = false

export const load = ({
	params,
}): {
	story: StoryBasic
	chapter: Chapter
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
		chapter: {
			title: "string",
			body: "string",
			number: 12,
			poll: {
				choices: [
					{
						text: "Manger",
						id: "12",
					},
					{
						text: "Aller a Guantánamo",
						id: "3",
					},
				],
			},
		},
	}
}
