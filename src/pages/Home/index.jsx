import React from "react";
import {useEffect} from "react";

import {useParams, useNavigate} from "react-router-dom";

import HeaderDashboard from "../../components/HeaderDashboard";
import KeysDashboard from "../../components/KeysDashboard";

import Users from "../../services/Users";

import ActivityChart from "../../components/ActivityChart";
import SessionChart from "../../components/SessionChart";
import PerformanceChart from "../../components/PerformanceChart";
import ScoreChart from "../../components/ScoreChart";

const arrayUsers = ["12", "18"];
function checkID(id) {
	if (id !== undefined) {
		// Check if ID exists in the list
		if (arrayUsers.includes(id)) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function Home({fake}) {
	{
		fake === 1
			? console.log("fake mode activated")
			: console.log("fake mode unactivated");
	}

	// GET ID User
	const {id} = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		if (!Users(id)) {
			navigate(`/home/` + arrayUsers[0]);
		}
	});
	if (Users(id)) {
		return (
			<div className="container-data">
				<HeaderDashboard user={{id: id}} data={{fake: fake}} />
				<div className="container-data-charts">
					<div className="container-data-charts-zone-charts">
						<div className="container-data-charts-zone-charts-group">
							<ActivityChart user={{id: id}} data={{fake: fake}} />
						</div>
						<div className="container-data-charts-zone-charts-group">
							<div className="container-data-charts-zone-charts-group-element">
								<SessionChart user={{id: id}} data={{fake: fake}} />
							</div>
							<div className="container-data-charts-zone-charts-group-element">
								<PerformanceChart user={{id: id}} data={{fake: fake}} />
							</div>
							<div className="container-data-charts-zone-charts-group-element">
								<ScoreChart user={{id: id}} data={{fake: fake}} />
							</div>
						</div>
					</div>
					<div className="container-data-charts-zone-keys">
						<KeysDashboard user={{id: id}} data={{fake: fake}} />
					</div>
				</div>
			</div>
		);
	} else {
		return "error";
	}
}
export default Home;
