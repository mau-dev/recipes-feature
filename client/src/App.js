import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNavbar from './components/layout/TopNavbar';
import NavMenu from './components/layout/NavMenu';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import RecipesPage from './pages/RecipesPage';
import NewRecipePage from './pages/NewRecipePage';
// import ExplorePage from './pages/ExplorePage';

import './App.scss';

const App = () => (
	<Router>
		<Fragment>
			<TopNavbar />
			<NavMenu />
      <Route exact path='/' component={RecipesPage} /> 
			
			<Switch>
				{/* <Route exact path='/explore' component={ExplorePage} /> 
        <Route exact path='/recipes' component={RecipesPage} />  */}
        <Route exact path='/recipes/new' component={NewRecipePage} /> 
        <Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
			</Switch>
		</Fragment>
	</Router>
);

export default App;
