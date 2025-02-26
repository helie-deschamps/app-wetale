import type { StoryBasic } from "../../types/StoryBasic"
import { TalesCategories } from "../../enums/TalesCategories"

export default async function (UID: string): Promise<StoryBasic> {
	// @todo fetch story from API
	if (Math.random() < 0.1) throw new Error("No story found")
	await new Promise(resolve => setTimeout(resolve, 1000))
	return {
		title: "Le Reflet du Chasseur",
		blurb:
			"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
		type: TalesCategories.Thriller,
		uid: UID,
		lastChapitre: 1,
		completionRatio: 0.73,
	}
}
