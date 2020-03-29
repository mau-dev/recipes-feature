import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import recipe from './recipe';

export default combineReducers({
	auth,
	profile,
	recipe
});
