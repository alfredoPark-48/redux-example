import React from "react";
import ReactDOM from "react-dom";

// Action Creator -> Action -> Dispatch -> Reducers -> State

// Action Creator
const createPolicy = (name, amount) => {
	// Action
	return {
		type: "CREATE_POLICY",
		payload: {
			name,
			amount,
		},
	};
};

// Action creator
const deletePolicy = (name) => {
	// Action
	return {
		type: "DELETE_POLICY",
		payload: {
			name,
		},
	};
};

// Action creator
const createClaim = (name, amountOfMoneyToCollect) => {
	// Action
	return {
		type: "CREATE_CLAIM",
		payload: {
			name,
			amountOfMoneyToCollect,
		},
	};
};

const App = () => {
	return <div>Hello World! Open console.</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
