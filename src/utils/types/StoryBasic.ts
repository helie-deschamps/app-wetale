import { TalesCategories } from "../enums/TalesCategories"

export type StoryBasic = {
	title: string
	blurb: string
	type: TalesCategories
	uid: string
	lastChapitre: number
	completionRatio: number
}
