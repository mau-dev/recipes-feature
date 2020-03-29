import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RecipeItem from './RecipeItem';

// import {getRecipe} from '../../actions/recipe';
import {getRecipes} from '../../actions/recipe';

const Recipes = ({getRecipes, recipe: {recipes, loading}}) => {
	useEffect(
		() => {
			getRecipes();
		},
		[ getRecipes ]
	);

	return (
		<Fragment>
			<h1>recipes</h1>
			<div className='recipes'>{recipes.map((recipe) => <RecipeItem key={recipe._id} recipe={recipe} />)}</div>
		</Fragment>
	);
};

Recipes.propTypes = {
	getRecipes: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
	// recipes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	recipe: state.recipe
	// recipes: state.recipes
});

export default connect(mapStateToProps, {getRecipes})(Recipes);
