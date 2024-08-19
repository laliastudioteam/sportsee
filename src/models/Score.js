export default class Score {
	userID;
	score;

	constructor(data) {
		this.userId = data.userId;
		this.score = data.score;
	}
}
