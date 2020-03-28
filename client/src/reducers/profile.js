import {
	GET_PROFILE,
	CLEAR_PROFILE,
	PROFILE_ERROR,
	GET_PROFILES,
	UPDATE_PROFILE,
	DELETE_PROFILE
} from '../actions/actionTypes';

const initialState = {
	profile: null,
	profiles: [],
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const {type, payload} = action;

	switch (type) {
		case GET_PROFILE:
		case UPDATE_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false
			};
		case PROFILE_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
				profile: null
			};
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				loading: false
			};

		default:
			return state;
	}
}
