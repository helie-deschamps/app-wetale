import { TalesCategories } from "../../enums/TalesCategories"
import { categoriesDatas } from "./getCategoryDatas"

export default function getCategoryFromLowercaseTitle(
	category: Lowercase<string>,
): TalesCategories | null {
	for (const [key, value] of Object.entries(categoriesDatas))
		if (value.lowercaseTitle === category) return key as TalesCategories
	return null
}
