import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from '../actions/actionTypes';
import setAuthToken from '../utils/setAuthToken';

//LOAD USER
export const loadUser = () => async (dispatch) => {
	//check local storage for token
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		//the login route
		const res = await axios.get('/api/auth');

		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

//REGISTER USER
//dispatch the register user action
export const register = ({username, email, password}) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({username, email, password});

	try {
		const res = await axios.post('/api/users', body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL
		});
	}
};

//LOGIN USER
//dispatch the login user action
export const login = ({email, password}) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({email, password});

	try {
		const res = await axios.post('/api/auth', body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL
		});
	}
};
