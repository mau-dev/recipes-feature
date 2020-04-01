import React, {useState, Fragment} from 'react';
import {createRecipe} from '../../../actions/recipe';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const StepFour = ({createRecipe, values}) => {


	// const {
	// 	title,
	// 	description,
	// 	mealType,
	// 	category,
	// 	dietRestriction,
	// 	tags,
	// 	cookingTime,
	// 	measurementsType,
	// 	coverPhoto,
	// 	preparation,

	// 	preparationPhotos
	// } = formData;

	

	console.log(values);


		const [ formData, setFormData ] = useState({
			title: values.title,
			description: values.description,
			mealType: values.mealType,
			category: values.category,
			dietRestriction: values.dietRestriction,
			tags: values.tags,
			cookingTime: values.cookingTime,
			measurementsType: values.measurementsType,
			coverPhoto: values.coverPhoto,
			preparation: values.preparation,
			preparationPhotos: values.preparationPhotos
		});
	
		const {
			title,
			description,
			mealType,
			category,
			dietRestriction,
			tags,
			cookingTime,
			measurementsType,
			coverPhoto,
			preparation,
			preparationPhotos
		} = formData;
	

console.log(formData);




	const onSubmit = (e) => {
		e.preventDefault();
		createRecipe(formData);
	};

	// continue = (e) => {
	// 	e.preventDefault();
	// 	// PROCESS FORM //
	// 	// this.props.nextStep();
	// 	createRecipe();
	// };

	// const back = (e) => {
	// 	e.preventDefault();
	// 	this.props.prevStep();
	// };

	return (
		<Fragment>
			<div>
				<h1>you are about to submit the recipe</h1>
			</div>
		
			{/* <button onSubmit={(e) => onSubmit(e)}>submit recipe</button> */}
			<button onClick={() => createRecipe(formData)}>submit recipe</button>
			{/* <button onClick={this.submit}>submit recipe</button> */}
		</Fragment>
	);

	
};

StepFour.propTypes = {
	createRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
};

export default connect(null, {createRecipe})(StepFour);
