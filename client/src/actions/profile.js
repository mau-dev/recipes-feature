import axios from 'axios';
import {GET_PROFILE, PROFILE_ERROR, GET_PROFILES, UPDATE_PROFILE, DELETE_PROFILE} from '../actions/actionTypes';

//GET PROFILE
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('api/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {msg: error.response.statusText, status: error.response.status}
		});
	}
};
