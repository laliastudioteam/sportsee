const dataUser = {
	data: {
		id: 18,
		userInfos: {firstName: "Cédric", lastName: "Delabarre", age: 46},
		score: 0.3,
		keyData: {
			calorieCount: 2500,
			proteinCount: 90,
			carbohydrateCount: 150,
			lipidCount: 120,
		},
	},
};
const dataActivity = {
	data: {
		userId: 12,
		sessions: [
			{day: "2020-07-01", kilogram: 90, calories: 2400},
			{day: "2020-07-02", kilogram: 90, calories: 2400},
			{day: "2020-07-03", kilogram: 90, calories: 2400},
			{day: "2020-07-04", kilogram: 90, calories: 2400},
			{day: "2020-07-05", kilogram: 90, calories: 2400},
			{day: "2020-07-06", kilogram: 90, calories: 2400},
			{day: "2020-07-07", kilogram: 90, calories: 2400},
		],
	},
};
const dataSession = {
	data: {
		userId: 18,
		sessions: [
			{day: 1, sessionLength: 30},
			{day: 2, sessionLength: 40},
			{day: 3, sessionLength: 50},
			{day: 4, sessionLength: 50},
			{day: 5, sessionLength: 50},
			{day: 6, sessionLength: 50},
			{day: 7, sessionLength: 50},
		],
	},
};

const dataPerformance = {
	data: {
		userId: 18,
		kind: {
			1: "cardio",
			2: "energy",
			3: "endurance",
			4: "strength",
			5: "speed",
			6: "intensity",
		},
		data: [
			{value: 200, kind: 1},
			{value: 200, kind: 2},
			{value: 200, kind: 3},
			{value: 220, kind: 4},
			{value: 200, kind: 5},
			{value: 200, kind: 6},
		],
	},
};
export {dataUser, dataActivity, dataSession, dataPerformance};
