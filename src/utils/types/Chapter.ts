import type { PollData } from "../../components/ui/Poll/types/PollData.type"
import type { TalesCategories } from "../enums/TalesCategories"

export type Chapter = {
	title: string
	body: string
	number: number
	poll: PollData
	category: TalesCategories
}
