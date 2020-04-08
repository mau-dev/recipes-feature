import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createRecipe} from '../../actions/recipe';
import FieldArraysForm from './IngredientsGroupForm';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
		
		<Fragment >
		
			<div className='recipe-form'> 
			<h4 className='text-center'>Create recipe</h4>
		
			{/* <FieldArraysForm onSubmit={pushIngredients}/> */}
			<FieldArraysForm onSubmit={(values) => setFormData(values)}/>
			
	
		

			<Form onSubmit={(e) => onSubmit(e)}>
				<FormGroup>
					<Input
						type='text'
						placeholder='Recipe title'
						name='title'
						value={title}
						onChange={(e) => onChange(e)}
						// required
					/>
				</FormGroup>

				<FormGroup>
					<Input
						type='textarea'
						placeholder='Recipe description'
						name='description'
						value={description}
						onChange={(e) => onChange(e)}
						// required
					/>
				</FormGroup>


				<Row >
				<Col md={4}>
				<FormGroup>
					<Label for='mealType'>Meal type</Label>
					
					<Input type="select" name="mealType" value={mealType} onChange={onChange} >
						
						<option value='breakfastBrunch'>Breakfast & Brunch</option>
						<option value='appetizer'>Appetizer</option>
						<option value='mainCourse'>Main Course</option>
						<option value='desserts'>Desserts</option>
						<option value='drinks'>Drinks</option>
					</Input>
				</FormGroup>
				</Col>
				<Col md={4}>
				<FormGroup>
					<Label for='category'>Category</Label>
					
					<Input type="select" name="category" value={category} onChange={onChange} >
						
						<option value='metric'>Salads</option>
						<option value='soupsStews'>Soups & Stews</option>
						<option value='breadDough'>Bread & Dough</option>
						<option value='dipsSpreads'>Dips & Spreads</option>
						<option value='condimentsDressings'>Condiments & Dressings</option>
						<option value='smoothies'>Smoothies</option>
						<option value='desserts'>Desserts</option>
						<option value='other'>Other</option>
					</Input>
				</FormGroup>
				</Col>
				<Col md={4}>
				<FormGroup>
					<Label for='dietRestriction'>Diet Restrictions</Label>
					
					<Input type="select" name='dietRestriction' value={dietRestriction} onChange={onChange} >
					    <option value='vegan'>Vegan</option>
						<option value='vegetarian'>Vegetarian</option>
						<option value='rawVegan'>Raw Vegan</option>
					</Input>
					
				</FormGroup>
				</Col>
				</Row>


                <Row >
				<Col md={6}>
				<FormGroup>
				<FormText color="muted" style={{visibility: 'hidden'}}>
                space placeholder
                 </FormText>
					<Input
						type='text'
						placeholder='Add coma separated tags'
						name='tags'
						value={tags}
						onChange={(e) => onChange(e)}
						// required
					/>
				</FormGroup>
				</Col>

                 <Col md={4}>
				<FormGroup>
				<FormText color="muted" style={{visibility: 'hidden'}}>
				space placeholder
                </FormText>
					<Input
						type='number'
						placeholder='Cooking time in minutes'
						name='cookingTime'
						value={cookingTime}
						onChange={(e) => onChange(e)}
						// required
					/>
					
				</FormGroup>
				</Col>
				<Col md={2}>
				<FormGroup>
				<FormText color="muted">
           Measuring units
               </FormText>
					{/* <Label for='measurementsType'>Measuring units</Label> */}
				
					<Input type="select" name='measurementsType' value={measurementsType} onChange={onChange}>
				
						<option value='metric'>Metric</option>
						<option value='Plant-imperial'>Imperial</option>
					</Input>
				</FormGroup>
				</Col>
				</Row>
		
				<FormGroup>
					<Input
						type='url'
						placeholder='Cover photo'
						name='coverPhoto'
						value={coverPhoto}
						onChange={(e) => onChange(e)}
						// required
					/>
				</FormGroup>
			
				
				<FormGroup>
					<Input
						type="textarea"
						placeholder='Preparation method'
						name='preparation'
						value={preparation}
						onChange={(e) => onChange(e)}
						// required
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type='url'
						placeholder='Preparation photos (optional)'
						name='preparationPhotos'
						value={preparationPhotos}
						onChange={(e) => onChange(e)}
						// required
					/>
				</FormGroup>
				<Button  size="lg" block  color="success" type='submit'  value='Post recipe' >Submit Recipe</Button>
			</Form>
			{/* <Link to='/add-ingredients'>Add ingredients</Link> */}
		
		</div>
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

