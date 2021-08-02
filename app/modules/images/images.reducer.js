import createReducer from "utils/createReducer";

const getInitState = () => ({
	images: [],
	show: false,
	index: 0,
});

const initState = getInitState();

const actionHandlers = {
	OPEN_REACT_IMAGES: (state, action) => {
		const result = { ...state };
		const { images, index = 0 } = action.payload;
		result.show = true;
		result.images = images;
		result.index = index;
		return result;
	},
	CLOSE_REACT_IMAGES: () => getInitState(),
};

export default createReducer(initState, actionHandlers);
