import createReducer from "utils/createReducer";

const getInitState = () => ({
	show: false,
	payload: {},
});

const initState = getInitState();

const actionHandlers = {
	OPEN_SIDEBAR: (state, action) => {
		const result = { ...state };
		result.show = true;
		result.payload = action.payload.payload;
		return result;
	},
	CLOSE_SIDEBAR: () => getInitState(),
};

export default createReducer(initState, actionHandlers);
