import { TalesCategories } from "../../enums/TalesCategories"

export type CategoryDatas = {
	title: string
	lowercaseTitle: Lowercase<string>
	colorBackground?: string
	colorText?: string
}

export const categoriesDatas: { [key in TalesCategories]: CategoryDatas } = {
	[TalesCategories.Romance]: {
		title: "Romance",
		lowercaseTitle: "romance",
		colorBackground: "#f9f9f6",
		colorText: "#e41d20",
	},
	[TalesCategories.Detective]: {
		title: "Policier",
		lowercaseTitle: "detective",
		colorBackground: "#7c1430",
		colorText: "#eb8495",
	},
	[TalesCategories.ScienceFiction]: {
		title: "Science Fiction",
		lowercaseTitle: "sf",
		colorBackground: "#086169",
		colorText: "#9ad2c8",
	},
	[TalesCategories.Adventure]: {
		title: "Action et Aventure",
		lowercaseTitle: "adventure",
		colorBackground: "#87801f",
		colorText: "#f9f9f6",
	},
	[TalesCategories.Thriller]: {
		title: "Thriller",
		lowercaseTitle: "thriller",
		colorBackground: "#6d103c",
		colorText: "#e94f1d",
	},
	[TalesCategories.Fantasy]: {
		title: "Fantasy",
		lowercaseTitle: "fantasy",
		colorBackground: "#f8be3f",
		colorText: "#f9f9f6",
	},
}

export default function (category: TalesCategories): CategoryDatas {
	return categoriesDatas[category]
}
