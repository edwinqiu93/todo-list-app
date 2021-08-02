import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./modules";
// import logger from "redux-logger";

let store;

function makeStore(initialState) {
	store = createStore(reducers, initialState, applyMiddleware(thunk));
	// console.log("STORE", store);
	return store;
}

export function getStore() {
	return store;
}

export default makeStore;
