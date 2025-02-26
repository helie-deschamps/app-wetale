export class ErrorOffline extends Error {
	constructor() {
		super("You are offline")
		this.name = "ErrorOffline"
	}
}
