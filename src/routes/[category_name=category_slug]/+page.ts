import getCategoryFromLowercaseTitle from "../../utils/functions/getCategoryFromLowercaseTitle"
import type { CategoryDatas } from "../../utils/functions/getCategoryDatas"

export const load = ({ params }) => {
	const category = getCategoryFromLowercaseTitle(
		params.category_name as CategoryDatas["lowercaseTitle"],
	)
	return {
		category: category,
		category_name: params.category_name,
	}
}
