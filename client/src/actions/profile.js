import axios from 'axios';
import {GET_PROFILE, PROFILE_ERROR, GET_PROFILES, UPDATE_PROFILE, DELETE_PROFILE} from '../actions/actionTypes';

//GET PROFILE
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {msg: err.response.statusText, status: err.response.status}
		});
	}
};

// CREATE PROFILE
export const createProfile = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const res = await axios.post('/api/profile', formData, config);

		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	} catch (err) {
		const errors = err.response.data.errors;

		dispatch({
			type: PROFILE_ERROR,
			payload: {msg: err.response.statusText, status: err.response.status}
		});
	}
};
