import { type Writable, writable } from "svelte/store"
import { TalesCategories } from "../enums/TalesCategories"

export const lastCategory: Writable<TalesCategories | undefined> = writable()
