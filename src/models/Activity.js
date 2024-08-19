export default class Activity {
	userID;
	sessions;

	constructor(data) {
		this.userId = data.userId;
		this.sessions = data.sessions;
	}
}
