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

// Reducer
const claimsHistory = (oldListOfClaims = [], action) => {
	if (action.type === "CREATE_CLAIM") {
		// We care about the form
		return [...oldListOfClaims, action.payload];
	}

	// We don't care about the form
	return oldListOfClaims;
};

// Reducer
const accounting = (bagOfMoney = 100, action) => {
	if (action.type === "CREATE_CLAIM") {
		return bagOfMoney - action.payload.amountOfMoneyToCollect;
	} else if (action.type === "CREATE_POLICY") {
		return bagOfMoney + action.payload.amountOfMoneyToCollect;
	} else {
		return bagOfMoney;
	}
};

const App = () => {
	return <div>Hello World! Open console.</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
