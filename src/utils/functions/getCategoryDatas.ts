import { TalesCategories } from "../enums/TalesCategories"

type CategoryDatas = {
	title: string
	cssClass:
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
		cssClass: "romance",
	},
	[TalesCategories.Detective]: { title: "Policier", cssClass: "detective" },
	[TalesCategories.ScienceFiction]: {
		title: "Science Fiction",
		cssClass: "sf",
	},
	[TalesCategories.Adventure]: {
		title: "Action et Aventure",
		cssClass: "adventure",
	},
	[TalesCategories.Thriller]: { title: "Thriller", cssClass: "thriller" },
	[TalesCategories.Fantasy]: { title: "Fantasy", cssClass: "fantasy" },
}

export default function (category: TalesCategories) {
	return categoriesDatas[category]
}
