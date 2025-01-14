import { TalesCategories } from "../enums/TalesCategories"

type CategoryDatas = {
	title: string
	lowercaseTitle:
		| "romance"
		| "detective"
		| "sf"
		| "adventure"
		| "thriller"
		| "fantasy"
}

const categoriesDatas: { [key in TalesCategories]: CategoryDatas } = {
	[TalesCategories.Romance]: {
		title: "Romance",
		lowercaseTitle: "romance",
	},
	[TalesCategories.Detective]: {
		title: "Policier",
		lowercaseTitle: "detective",
	},
	[TalesCategories.ScienceFiction]: {
		title: "Science Fiction",
		lowercaseTitle: "sf",
	},
	[TalesCategories.Adventure]: {
		title: "Action et Aventure",
		lowercaseTitle: "adventure",
	},
	[TalesCategories.Thriller]: { title: "Thriller", lowercaseTitle: "thriller" },
	[TalesCategories.Fantasy]: { title: "Fantasy", lowercaseTitle: "fantasy" },
}

export default function (category: TalesCategories): CategoryDatas {
	return categoriesDatas[category]
}
