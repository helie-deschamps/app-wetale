import { categoriesDatas, type CategoryDatas } from "./getCategoryDatas"

export function getRandomCategories(quantity: number): CategoryDatas[] {
	const values = Object.values(categoriesDatas)
	const clampedQuantity = Math.min(quantity, values.length)

	return values
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.slice(0, clampedQuantity)
		.map(({ value }) => value)
}
