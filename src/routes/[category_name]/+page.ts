import getCategoryFromLowercaseTitle from "../../utils/functions/getCategoryFromLowercaseTitle"

export const load = ({ params }) => {
	const category = getCategoryFromLowercaseTitle(params.category_name)
	return {
		category: category,
		category_name: params.category_name,
	}
}
