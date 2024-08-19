import {dataSession} from "../data/mockup.js";
import Session from "../models/Session.js";

function SessionLoad() {
	function convertDataSession(data) {
		console.log(data.data.sessions);
		const ArrayDay = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"};
		let convertedArray = [];
		data.data.sessions.forEach(element => {
			let day = element.day;
			let sl = element.sessionLength;

			convertedArray.push({day: ArrayDay[day], nb: sl});
		});

		console.log(convertedArray);
		return {userId: data.userId, sessions: convertedArray};
	}
	const getSession = async (user, dataFake) => {
		if (dataFake === 0) {
			// Si dataFake est 0, on fait un fetch pour obtenir les données depuis l'API
			const res = await fetch(
				"http://localhost:3000/user/" + user + "/average-sessions"
			);
			const data = await res.json();

			return new Session(convertDataSession(data));
		} else {
			// Si dataFake n'est pas 0, on utilise les données du mock
			return new Promise((resolve, reject) => {
				resolve(dataSession); // On résout directement avec les données mockées
			}).then(resultat => {
				return new Session(convertDataSession(resultat));
			});
		}
	};

	return {
		getSession,
	};
}

export default SessionLoad();
