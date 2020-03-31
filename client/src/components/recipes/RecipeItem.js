import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {getRecipe} from '../../actions/recipe';
import {getRecipes} from '../../actions/recipe';
import {unSaveRecipe} from '../../actions/recipe';
import {saveRecipe} from '../../actions/recipe';

// const IngredientItem =

const RecipeItem = ({
	auth,
	isSaved,
	saveRecipe,
	unSaveRecipe,
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
	const saveButton = (
		<button onClick={() => saveRecipe(_id)} type='button' className='btn btn-light'>
			save
			<i className='far fa-bookmark' /> <span>{saves.length > 0 && <span>{saves.length}</span>}</span>
		</button>
	);

	const unsaveButton = (
		<button onClick={() => unSaveRecipe(_id)} type='button' className='btn btn-light'>
			unsave
			<i className='fas fa-bookmark' /> <span>{saves.length > 0 && <span>{saves.length}</span>}</span>
		</button>
	);

	// const savedByUser;

	// if (
	// 	recipe.saves.filter(save => save.user.toString() === req.user.id).length > 0
	//   ) {
	// 	  savedByUser = true;
	//   } else {
	// 	  savedByUser = false
	//   };

	// console.log(auth);
	console.log(ingredients);

	const ingredientItems = ingredients.map((ingredient, index) => {
		return <li key={ingredient._id}>{`${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredient}  `} </li>;
	});

	// <div className='ingredients'>
	// 	{' '}
	// 	{ingredients.map((ingredient) => <IngredientItem key={ingredient._id} ingredient={ingredient} />)}
	// </div>;
	return (
		<Fragment>
			<Fragment>
				<div>{ingredientItems}</div>
				<div className=' recipe-container container'>
					<p>{username}</p>
					{/* <img src={coverPhoto} /> */}
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
					{/* <p>qtt{ingredients[0].quantity}</p> */}
					<p>unit{ingredients.unit}</p>
					<p>ingredient{ingredients.ingredient}</p>
					<p>{preparation}</p>
					<p>{date}</p>
				</div>
			</Fragment>

			{/* <Fragment> */}
			{/* <button onClick={() => saveRecipe(_id)} type='button' className='btn btn-light'>
					<i className='far fa-bookmark' /> <span>{saves.length > 0 && <span>{saves.length}</span>}</span>
				</button> */}
			{/* </Fragment> */}
			<Fragment>{isSaved ? unsaveButton : saveButton}</Fragment>
		</Fragment>
	);
};

RecipeItem.propTypes = {
	// getRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired,
	// recipes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	saveRecipe: PropTypes.func.isRequired,
	unSaveRecipe: PropTypes.func.isRequired,
	isSaved: PropTypes.bool
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	isSaved: state.recipe.isSaved
	// recipes: state.recipes
});

export default connect(mapStateToProps, {saveRecipe, unSaveRecipe})(RecipeItem);
