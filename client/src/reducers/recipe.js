import {
	GET_RECIPES,
	GET_RECIPE,
	RECIPE_ERROR,
	SAVE_RECIPE,
	UNSAVE_RECIPE,
	CLEAR_SAVES,
	CREATE_RECIPE,
	UPDATE_RECIPE,
	DELETE_RECIPE
} from '../actions/actionTypes';

const initialState = {
	recipes: [],
	recipe: null,
	isSaved: false,
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
		case SAVE_RECIPE:
			return {
				...state,
				recipes: state.recipes.map(
					(recipe) => (recipe._id === payload.id ? {...recipe, saves: payload.saves} : recipe)
				),
				isSaved: true,
				loading: false
			};

		case UNSAVE_RECIPE:
			return {
				...state,
				recipes: state.recipes.map(
					(recipe) => (recipe._id === payload.id ? {...recipe, saves: payload.saves} : recipe)
				),
				isSaved: false,
				loading: false
			};
		case CLEAR_SAVES:
			return {
				...state,
				isSaved: false
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
