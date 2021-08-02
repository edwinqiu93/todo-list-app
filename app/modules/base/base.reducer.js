import createReducer from "utils/createReducer";
import webConfig from "../../web.config";

const initState = {
	sidebar: { show: false },
	keywords: webConfig.keywords,
	user: null,
	access_token: null,
};

const actionHandlers = {
	SET_USER: (state, action) => {
		const result = { ...state };
		result.user = action.payload.user;
		result.access_token = action.payload.access_token;
		return result;
	},
	SET_KEYWORDS: (state, action) => {
		const result = { ...state };
		result.keywords = action.payload.keywords ? action.payload.keywords : webConfig.keywords;
		return result;
	},
};

export default createReducer(initState, actionHandlers);
