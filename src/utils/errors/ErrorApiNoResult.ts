export class ErrorApiNoResult extends Error {
	constructor(message?: string) {
		super(message ?? "No result found")
		this.name = "ErrorApiNoRes"
	}
}
