export default class Activity {
	userId;
	kind;

	constructor(data) {
		this.userId = data.userId;
		this.kind = data.kind;
	}
}
