import React, {useState, useEffect} from "react";
import DataLoad from "./DataLoad";

import "../styles/KeysDashboard.css";

import pictoEnergy from "../assets/icons/energy.png";
import pictoChicken from "../assets/icons/chicken.png";
import pictoApple from "../assets/icons/apple.png";
import pictoCheeseburger from "../assets/icons/cheeseburger.png";

function KeysDashboard(dataPass) {
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
			<div className="keysContainer">
				<div className="keysContainer-content">
					<ul className="keysContainer-content-list">
						<li className="keysContainer-content-list-element">
							<div className="keysContainer-content-list-element-zone-picto">
								<div className="keysContainer-content-list-element-zone-picto-color keysContainer-content-list-element-zone-picto-color-calories">
									<img
										src={pictoEnergy}
										className="keysContainer-content-list-element-zone-picto-color-picto"
										alt="calorie"
									/>
								</div>
							</div>
							<div className="keysContainer-content-list-element-zone-text">
								<div className="keysContainer-content-list-element-zone-text-group">
									<div className="keysContainer-content-list-element-zone-text-group-title">
										{user.data.keyData.calorieCount}
									</div>
									<div className="keysContainer-content-list-element-zone-text-group-subtitle">
										Calories
									</div>
								</div>
							</div>
						</li>
						<li className="keysContainer-content-list-element">
							<div className="keysContainer-content-list-element-zone-picto">
								<div className="keysContainer-content-list-element-zone-picto-color keysContainer-content-list-element-zone-picto-color-proteines">
									<img
										src={pictoChicken}
										className="keysContainer-content-list-element-zone-picto-color-picto"
										alt="proteine"
									/>
								</div>
							</div>
							<div className="keysContainer-content-list-element-zone-text">
								<div className="keysContainer-content-list-element-zone-text-group">
									<div className="keysContainer-content-list-element-zone-text-group-title">
										{user.data.keyData.proteinCount}
									</div>
									<div className="keysContainer-content-list-element-zone-text-group-subtitle">
										Proteines
									</div>
								</div>
							</div>
						</li>
						<li className="keysContainer-content-list-element">
							<div className="keysContainer-content-list-element-zone-picto">
								<div className="keysContainer-content-list-element-zone-picto-color keysContainer-content-list-element-zone-picto-color-glucides">
									<img
										src={pictoApple}
										className="keysContainer-content-list-element-zone-picto-color-picto"
										alt="glucide"
									/>
								</div>
							</div>
							<div className="keysContainer-content-list-element-zone-text">
								<div className="keysContainer-content-list-element-zone-text-group">
									<div className="keysContainer-content-list-element-zone-text-group-title">
										{user.data.keyData.carbohydrateCount}
									</div>
									<div className="keysContainer-content-list-element-zone-text-group-subtitle">
										Glucides
									</div>
								</div>
							</div>
						</li>
						<li className="keysContainer-content-list-element">
							<div className="keysContainer-content-list-element-zone-picto">
								<div className="keysContainer-content-list-element-zone-picto-color keysContainer-content-list-element-zone-picto-color-lipides">
									<img
										src={pictoCheeseburger}
										className="keysContainer-content-list-element-zone-picto-color-picto"
										alt="lipide"
									/>
								</div>
							</div>
							<div className="keysContainer-content-list-element-zone-text">
								<div className="keysContainer-content-list-element-zone-text-group">
									<div className="keysContainer-content-list-element-zone-text-group-title">
										{user.data.keyData.lipidCount}
									</div>
									<div className="keysContainer-content-list-element-zone-text-group-subtitle">
										Lipides
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default KeysDashboard;
