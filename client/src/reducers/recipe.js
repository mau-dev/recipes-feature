import {
	GET_RECIPES,
	GET_RECIPE,
	RECIPE_ERROR,
	SAVE_RECIPE,
	UNSAVE_RECIPE,
	CREATE_RECIPE,
	UPDATE_RECIPE,
	DELETE_RECIPE
} from '../actions/actionTypes';

const initialState = {
	recipes: [],
	recipe: null,
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const {type, payload} = action;

	switch (type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: payload,
				loading: false
			};
		case CREATE_RECIPE:
			return {
				...state,
				recipes: [ ...state.recipes, payload ],
				loading: false
			};
		case GET_RECIPE:
			return {
				...state,
				recipe: payload,
				loading: false
			};
		case RECIPE_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};

		default:
			return state;
	}
}
