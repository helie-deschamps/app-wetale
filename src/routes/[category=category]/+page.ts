import getCategoryFromLowercaseTitle from "../../utils/functions/categories/getCategoryFromLowercaseTitle"
import type { CategoryDatas } from "../../utils/functions/categories/getCategoryDatas"

export const load = ({ params }) => {
	const category = getCategoryFromLowercaseTitle(
		params.category as CategoryDatas["lowercaseTitle"],
	)
	return {
		category: category,
		category_name: params.category,
	}
}
