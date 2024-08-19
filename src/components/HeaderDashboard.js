import React, {useState, useEffect} from "react";

import DataLoad from "./DataLoad";

import "../styles/HeaderDashboard.css";

function HeaderDashboard(dataPass) {
	const idUser = dataPass.user.id;
	const fake = dataPass.data.fake;

	const [user, setUser] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		!isLoaded &&
			DataLoad.getUser({id: idUser, fake: fake}).then(json => {
				setUser(json);
				setIsLoaded(true);
			});
	}, [isLoaded]);
	if (isLoaded) {
		return (
			<>
				<div className="headerContainer">
					<div className="headerContainer-content">
						<div className="headerContainer-content-group">
							<span className="headerContainer-content-group-title">Bonjour</span>
							<span className="headerContainer-content-group-forename">
								{user.data.userInfos.firstName}
							</span>
						</div>
						<div className="headerContainer-content-sentence">
							{fake
								? "Bravo : Vous etes en mode fake data"
								: "Félicitations ! Vous avez explosé vos objectifs hier 👏"}
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default HeaderDashboard;
