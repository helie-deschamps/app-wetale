import type { StoryBasic } from "../../types/StoryBasic"
import { TalesCategories } from "../../enums/TalesCategories"
import { ErrorOffline } from "../../errors/ErrorOffline"

const storiesCache = new Map<string, StoryBasic>()

/**
 * @throws {ErrorOffline, ErrorApiNoResult}
 */
export default async function getStoryFromUid(
	UID: string,
): Promise<StoryBasic> {
	if (!storiesCache.has(UID)) {
		// @todo fetch story from API
		if (!navigator.onLine) throw new ErrorOffline()

		await new Promise(resolve => setTimeout(resolve, 680))
		//if (Math.random() < 0.1) throw new ErrorApiNoResult("No story found")
		storiesCache.set(UID, {
			title: "Sous les étoiles de Paris",
			blurb:
				"Une artiste de rue et un chef étoilé tombent amoureux lors d’un concours culinaire insolite.",
			type: TalesCategories.Romance,
			uid: UID,
			lastChapitre: 8,
			completionRatio: 23,
		})
	}
	return storiesCache.get(UID) as StoryBasic
}
