import {dataActivity} from "../data/mockup.js";

function ActivityLoad() {
	const getActivity = async (user, dataFake) => {
		if (dataFake === 0) {
			// Si dataFake est 0, on fait un fetch pour obtenir les données depuis l'API
			const res = await fetch("http://localhost:3000/user/" + user + "/activity");
			const data = await res.json();

			let sessions = data.data.sessions;
			let convertedArray = [];

			sessions.forEach(element => {
				let day = element.day.substr(8); // Extrait le jour
				let kg = element.kilogram; // Poids en kilogrammes
				let cal = element.calories; // Calories
				convertedArray.push({day, kg, cal});
			});

			return convertedArray;
		} else {
			// Si dataFake n'est pas 0, on utilise les données du mock

			return new Promise((resolve, reject) => {
				resolve(dataActivity); // On résout directement avec les données mockées
			}).then(resultat => {
				let sessions = resultat.data.sessions;
				let convertedArray = [];
				sessions.forEach(element => {
					let day = element.day.substr(8); // Extrait le jour
					let kg = element.kilogram; // Poids en kilogrammes
					let cal = element.calories; // Calories
					convertedArray.push({day, kg, cal});
				});

				return convertedArray;
			});
		}
	};

	return {
		getActivity,
	};
}

export default ActivityLoad();
