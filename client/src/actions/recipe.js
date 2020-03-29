import axios from 'axios';
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

//public routes for: get recipes, get recipe
//protectet routes for: save recipe, unsave recipe, create, update, delete recipe

// GET RECIPE
export const getRecipe = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/recipes/${id}`);

		dispatch({
			type: GET_RECIPE,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: RECIPE_ERROR,
			payload: {msg: err.response.statusText, status: err.response.status}
		});
	}
};

//GET RECIPES
export const getRecipes = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/recipes');

		dispatch({
			type: GET_RECIPES,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: RECIPE_ERROR,
			payload: {msg: err.response.statusText, status: err.response.status}
		});
	}
};
