import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import recipe from './recipe';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
	auth,
	profile,
	recipe,
	form: reduxFormReducer
});
