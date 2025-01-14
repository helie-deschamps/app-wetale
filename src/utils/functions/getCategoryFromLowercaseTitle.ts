import { TalesCategories } from "../enums/TalesCategories"

export default function (category: string): TalesCategories | null {
	switch (category) {
		case "romance": {
			return TalesCategories.Romance
		}
		case "detective": {
			return TalesCategories.Detective
		}
		case "sf": {
			return TalesCategories.ScienceFiction
		}
		case "adventure": {
			return TalesCategories.Adventure
		}
		case "thriller": {
			return TalesCategories.Thriller
		}
		case "fantasy": {
			return TalesCategories.Fantasy
		}
		default: {
			return null
		}
	}
}
