import {dataUser} from "../data/mockup.js";

function convertDataScore(data) {
	let dataArray = [];
	if (data.data.score !== undefined) {
		dataArray = [
			{
				name: "score",
				uv: data.data.score,
				fill: "#F00",
			},
		];
	} else {
		dataArray = [
			{
				name: "score",
				uv: data.data.todayScore,
				fill: "#F00",
			},
		];
	}
	return dataArray;
}

function ScoreLoad() {
	const getScore = async (user, dataFake) => {
		if (dataFake === 0) {
			// Si dataFake est 0, on fait un fetch pour obtenir les données depuis l'API
			const res = await fetch("http://localhost:3000/user/" + user);
			const data = await res.json();

			return convertDataScore(data);
		} else {
			// Si dataFake n'est pas 0, on utilise les données du mock

			return new Promise((resolve, reject) => {
				resolve(dataUser); // On résout directement avec les données mockées
			}).then(resultat => {
				return convertDataScore(resultat);
			});
		}
	};

	return {
		getScore,
	};
}

export default ScoreLoad();
