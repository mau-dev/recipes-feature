import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createRecipe} from '../../actions/recipe';
// import IngredientsGroup from './IngredientsGroup';
import FieldArraysForm from './IngredientsGroupForm';
import showResults from "./showResults";




const RecipeForm = ({createRecipe, history, handleSubmit}) => {
	const [ formData, setFormData ] = useState({
		title: '',
		description: '',
		mealType: '',
		category: '',
		dietRestriction: [''],
		tags: [''],
		cookingTime: '',
		measurementsType: '',
		coverPhoto: '',
		preparation: [''],
		ingredients: [{quantity: '', unit: '', ingredient: '',}],
		

		preparationPhotos: ['']
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
		ingredients,
		ingredient,
		quantity,
		unit,

		preparationPhotos
	} = formData;

	const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

	const onSubmit = (e) => {
		e.preventDefault();
		createRecipe(formData, history);
	};


	return (
		<Fragment>
			{/* <div className='form-wrap'> */}
			<h1 className='text-center'>Post recipe</h1>
			{/* <IngredientsGroup/> */}
			{/* <FieldArraysForm onSubmit={showResults}/> */}
			<FieldArraysForm />
			
		

			<form className='' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Recipe title'
						name='title'
						value={title}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>

				<div className='form-group'>
					<input
						type='text'
						placeholder='Recipe description'
						name='description'
						value={description}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				

				<div className='form-group'>
					<input
						type='number'
						placeholder='Cooking time'
						name='cookingTime'
						value={cookingTime}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				<div className='form-group'>
					<input
						type='url'
						placeholder='Cover photo'
						name='coverPhoto'
						value={coverPhoto}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				<div className='form-group'>
					<label for='mealType'>Meal type</label>
					<br />
					<select name='mealType' value={mealType} onChange={onChange} size='10'>
						<br />
						<option value='breakfastBrunch'>Breakfast & Brunch</option>
						<option value='appetizer'>Appetizer</option>
						<option value='mainCourse'>Main Course</option>
						<option value='desserts'>Desserts</option>
						<option value='drinks'>Drinks</option>
					</select>
				</div>
				<div className='form-group'>
					<label for='category'>Category</label>
					<br />
					<select name='category' value={category} onChange={onChange} size='10'>
						<br />
						<option value='metric'>Salads</option>
						<option value='soupsStews'>Soups & Stews</option>
						<option value='breadDough'>Bread & Dough</option>
						<option value='dipsSpreads'>Dips & Spreads</option>
						<option value='condimentsDressings'>Condiments & Dressings</option>
						<option value='smoothies'>Smoothies</option>
						<option value='desserts'>Desserts</option>
						<option value='other'>Other</option>
					</select>
				</div>
				<div className='form-group'>
					<label for='dietRestriction'>Diet Restrictions. Hold ctrl to select all that apply.</label>
					<br />
					<select name='dietRestriction' value={dietRestriction} onChange={onChange} size='10'>
						<br />
						<option value='vegetarian'>Vegetarian</option>
						<option value='vegan'>Vegan</option>
						<option value='rawVegan'>Raw Vegan</option>
					</select>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Add coma separated tags'
						name='tags'
						value={tags}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				<div className='form-group'>
					<label for='measurementsType'>Preffered units of measurements</label>
					<br />
					<select name='measurementsType' value={measurementsType} onChange={onChange} size='10'>
						<br />
						<option value='metric'>Metric</option>
						<option value='Plant-imperial'>Imperial</option>
					</select>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Preparation method'
						name='preparation'
						value={preparation}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				<div className='form-group'>
					<input
						type='url'
						placeholder='Preparation photos (optional)'
						name='preparationPhotos'
						value={preparationPhotos}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Create recipe' />
			</form>
			{/* <Link to='/add-ingredients'>Add ingredients</Link> */}
		</Fragment>
	);
};

RecipeForm.propTypes = {
	createRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
};

// const mapStateToProps = (state) => ({
// 	recipe: state.recipe

// });

export default connect(null, {createRecipe})(RecipeForm);
