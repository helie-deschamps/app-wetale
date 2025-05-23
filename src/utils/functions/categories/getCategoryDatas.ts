import { TalesCategories } from "../../enums/TalesCategories"

export type CategoryDatas = {
	title: string
	lowercaseTitle: Lowercase<string>
	colorBackground?: string
	colorText?: string
	isAlternated?: boolean
	couldBeRotated?: boolean
}

export const categoriesDatas: { [key in TalesCategories]: CategoryDatas } = {
	[TalesCategories.Romance]: {
		title: "Romance",
		lowercaseTitle: "romance",
		colorBackground: "#f9f9f6",
		colorText: "#e41d20",
		isAlternated: true,
		couldBeRotated: false,
	},
	[TalesCategories.Detective]: {
		title: "Policier",
		lowercaseTitle: "detective",
		colorBackground: "#7c1430",
		colorText: "#eb8495",
		isAlternated: false,
		couldBeRotated: true,
	},
	[TalesCategories.ScienceFiction]: {
		title: "Science Fiction",
		lowercaseTitle: "sf",
		colorBackground: "#086169",
		colorText: "#9ad2c8",
		isAlternated: false,
		couldBeRotated: true,
	},
	[TalesCategories.Adventure]: {
		title: "Action et Aventure",
		lowercaseTitle: "adventure",
		colorBackground: "#87801f",
		colorText: "#f9f9f6",
		isAlternated: false,
		couldBeRotated: true,
	},
	[TalesCategories.Thriller]: {
		title: "Thriller",
		lowercaseTitle: "thriller",
		colorBackground: "#6d103c",
		colorText: "#e94f1d",
		isAlternated: false,
		couldBeRotated: true,
	},
	[TalesCategories.Fantasy]: {
		title: "Fantasy",
		lowercaseTitle: "fantasy",
		colorBackground: "#f8be3f",
		colorText: "#f9f9f6",
		isAlternated: false,
		couldBeRotated: true,
	},
}

export default function getCategoryDatas(
	category: TalesCategories,
): CategoryDatas {
	return categoriesDatas[category]
}
