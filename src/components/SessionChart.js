import React, {useState, useEffect, PureComponent} from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import SessionLoad from "./SessionLoad";

import "../styles/SessionChart.css";

// Customization du Tooltip
const CustomTooltip = ({active, payload, label}) => {
	if (active && payload && payload.length) {
		return (
			<div className="sessionChart-custom-tooltip">
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		);
	}
};

class SessionChart extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			dataToDisplay: [],
			loading: true,
			error: null,
			parametres: props,
		};
	}

	componentDidMount() {
		SessionLoad.getSession(this.props.user.id, this.props.data.fake)
			.then(data => {
				this.setState({dataToDisplay: data, loading: false});
			})
			.catch(error => {
				console.error("Erreur de récupération des données:", error);
				this.setState({error: error, loading: false});
			});
	}

	render() {
		const {dataToDisplay, loading, error} = this.state;

		if (loading) {
			return <p>Chargement des données</p>;
		}

		if (error) {
			return <p>Erreur : {error.message}</p>;
		}

		return (
			<div className="sessionChart-container">
				{dataToDisplay ? (
					<ResponsiveContainer width="100%" height="100%">
						<div className="sessionChart-title">Durée moyenne des sessions</div>
						<LineChart
							width={500}
							height={300}
							data={dataToDisplay.sessions}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<XAxis dataKey="day" stroke="#ffffff" />
							<YAxis tick={false} hide />
							<Tooltip content={<CustomTooltip />} />

							<Line type="monotone" dataKey="nb" stroke="#ffffff" />
						</LineChart>
					</ResponsiveContainer>
				) : (
					"Error loading Data"
				)}
			</div>
		);
	}
}

export default SessionChart;
