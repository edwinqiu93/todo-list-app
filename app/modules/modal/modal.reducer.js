import createReducer from "utils/createReducer";

const getInitState = () => ({
	show: false,
	tag: null,
	payload: {},
});

const initState = getInitState();

const actionHandlers = {
	OPEN_MODAL: (state, action) => {
		const result = { ...state };
		const { tag, payload = {} } = action.payload;
		result.show = true;
		result.tag = tag;
		result.payload = payload;
		return result;
	},
	CLOSE_MODAL: () => initState,
};

export default createReducer(initState, actionHandlers);
