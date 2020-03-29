import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {getRecipe} from '../../actions/recipe';
import {getRecipes} from '../../actions/recipe';

const RecipeItem = ({
	auth,
	recipe: {
		_id,
		username,
		profilePicture,
		title,
		coverPhoto,
		description,
		mealType,
		category,
		dietRestriction,
		tags,
		cookingTime,
		measurementsType,
		ingredients,
		preparation,
		saves,
		savesCounter,
		date
	}
}) => {
	// console.log(auth);
	// console.log(user);
	return (
		<Fragment>
			<p>{username}</p>
			{/*<img src={coverPhoto} /> */}
			<p>{title}</p>
			<Link to={`recipes/${_id}`}>View recipe</Link>
			<p>{description}</p>
			<p>{mealType}</p>
			<p>{category}</p>
			<p>{tags}</p>
			<p>{dietRestriction}</p>
			<p>{cookingTime}</p>
			<p>{cookingTime}</p>
			<p>{measurementsType}</p>
			{/* <p>qtt{ingredients.quantity}</p>
			<p>unit{ingredients.unit}</p>
			<p>ingredient{ingredients.ingredient}</p> */}
			<p>{preparation}</p>
			<p>{date}</p>
		</Fragment>
	);
};
RecipeItem.propTypes = {
	// getRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
	// recipes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
	// recipes: state.recipes
});

export default connect(mapStateToProps, {})(RecipeItem);
