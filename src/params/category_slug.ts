import { categoriesDatas } from "../utils/functions/getCategoryDatas"

export function match(value) {
	return Object.values(categoriesDatas).some(
		category => category.lowercaseTitle === value,
	)
}
