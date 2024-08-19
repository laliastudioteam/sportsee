import {dataUser} from "../data/mockup.js";

function DataLoad() {
	const getUser = data => {
		let resultat = [];
		if (data.fake === 0) {
			resultat = fetch("http://localhost:3000/user/" + data.id, {
				type: "GET",
			}).then(res => res.json());
		} else {
			resultat = new Promise((resolve, reject) => resolve(dataUser));
		}
		return resultat;
	};

	return {
		getUser,
	};
}

export default DataLoad();
