import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNavbar from './components/layout/TopNavbar';
import NavMenu from './components/layout/NavMenu';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import RecipesPage from './pages/RecipesPage';
import NewRecipePage from './pages/NewRecipePage';
import ExplorePage from './pages/ExplorePage';

import ProfileDashboard from './components/profileDashboard/ProfileDashboard';
import Recipes from './components/recipes/Recipes';
import Recipe from './components/recipe/Recipe';
import RecipeForm from './components/recipes/RecipeForm';

import CreateProfile from './components/profileForms/CreateProfile';
import UpdateProfile from './components/profileForms/UpdateProfile';

import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.scss';
// import IngredientsForm from './components/recipes/IngredientsForm';
import MainStepForm from './components/recipes/step-form/MainStepForm';
import FieldArraysForm from './components/recipes/IngredientsGroupForm';




const App = () => {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			store.dispatch(loadUser());
		}
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<TopNavbar />
					<NavMenu />
					{/* <Route exact path='/' component={RecipesPage} /> */}
					<Route exact path='/' component={Recipes} />
					<Switch>
						<PrivateRoute exact path='/profile-me' component={ProfileDashboard} />
						<Route exact path='/explore' component={ExplorePage} />
						<Route exact path='/recipes' component={Recipes} />
						<Route exact path='/recipes/:id' component={Recipe} />
						<Route exact path='/new-form' component={MainStepForm} />
						<Route exact path='/rec' component={FieldArraysForm} />
						
						{/* <Route exact path='/recipes/new' component={NewRecipePage} /> */}
						{/* <Route exact path='/profile/me' component={UsersProfilePage} /> */}
						{/* <Route exact path='/create-profile' component={CreateProfilePage} /> */}
						<PrivateRoute exact path='/create-profile' component={CreateProfile} />
						{/* <PrivateRoute exact path='/add-ingredients' component={IngredientsForm} /> */}

						<PrivateRoute exact path='/settings' component={UpdateProfile} />
						<PrivateRoute exact path='/create-recipe' component={RecipeForm} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};
export default App;
