import type { StoryBasic } from "../../types/StoryBasic"
import { TalesCategories } from "../../enums/TalesCategories"
import { ErrorOffline } from "../../errors/ErrorOffline"
import { ErrorApiNoRes } from "../../errors/ErrorApiNoRes"

const storiesCache = new Map<string, StoryBasic>()

/**
 * @throws {ErrorOffline, ErrorApiNoRes}
 */
export default async function (UID: string): Promise<StoryBasic> {
	if (!storiesCache.has(UID)) {
		// @todo fetch story from API
		if (!navigator.onLine) throw new ErrorOffline()

		await new Promise(resolve => setTimeout(resolve, 4000))
		if (Math.random() < 0.1) throw new ErrorApiNoRes("No story found")
		storiesCache.set(UID, {
			title: "Le Reflet du Chasseur",
			blurb:
				"Un photographe découvre que des personnes capturées sur ses clichés sont assassinées peu après.",
			type: TalesCategories.Thriller,
			uid: UID,
			lastChapitre: 1,
			completionRatio: 0.73,
		})
	}
	return storiesCache.get(UID) as StoryBasic
}
