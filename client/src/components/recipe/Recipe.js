import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {getRecipe} from '../../actions/recipe';
import RecipeItem from '../recipes//RecipeItem';

const Recipe = ({getRecipe, recipe: {recipe, loading}, match}) => {
	useEffect(
		() => {
			getRecipe(match.params.id);
		},
		[ getRecipe, match.params.id ]
	);

	return loading || recipe === null ? (
		<h1>loading</h1>
	) : (
		<Fragment>
			<Link to='/recipes'>recipes</Link>
			<RecipeItem recipe={recipe} />
		</Fragment>
	);
};

Recipe.propTypes = {
	getRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
	// auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	recipe: state.recipe
	// auth: state.auth
});

export default connect(mapStateToProps, {getRecipe})(Recipe);
