import React, {PureComponent} from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

import PerformanceLoad from "./PerformanceLoad";

import "../styles/PerformanceChart.css";

class PerformanceChart extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			dataToDisplay: [],
			loading: true,
			error: null,
		};
	}

	componentDidMount() {
		PerformanceLoad.getPerformance(this.props.user.id, this.props.data.fake)
			.then(data => {
				this.setState({dataToDisplay: data, loading: false});
				console.log(data);
			})
			.catch(error => {
				console.error("Erreur de récupération des données:", error);
				this.setState({error: error, loading: false});
			});
	}
	render() {
		const {dataToDisplay, loading, error} = this.state;
		console.log(dataToDisplay);
		if (loading) {
			return <p>Chargement des données</p>;
		}

		if (error) {
			return <p>Erreur : {error.message}</p>;
		}

		return (
			<div className="performanceChart-container">
				{dataToDisplay ? (
					<ResponsiveContainer width="100%" height="100%">
						<RadarChart
							cx="50%"
							cy="50%"
							outerRadius="80%"
							data={dataToDisplay.kind}
							fill="rgba(255, 1, 1, 0.7)"
						>
							<PolarGrid />
							<PolarAngleAxis dataKey="kind" />
							<PolarRadiusAxis tick={false} />
							<Radar name="Mike" dataKey="nb" />
						</RadarChart>
					</ResponsiveContainer>
				) : (
					"Error loading Data"
				)}
			</div>
		);
	}
}

export default PerformanceChart;
