import React, {Fragment} from 'react';

export class StepOne extends React.Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	onChange = (input) => (e) => {
		this.setState({[input]: e.target.value});
	};

	render() {
		const {values, onChange} = this.props;
		return (
			<Fragment>
				<h1 className='text-center'>Post recipe</h1>
				{/* <IngredientsForm /> */}

				<form className=''>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Recipe title'
							name='title'
							value={values.title}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							placeholder='Recipe description'
							name='description'
							value={values.description}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>

					<div className='form-group'>
						<input
							type='number'
							placeholder='Cooking time'
							name='cookingTime'
							value={values.cookingTime}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-group'>
						<input
							type='url'
							placeholder='Cover photo'
							name='coverPhoto'
							value={values.coverPhoto}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-group'>
						<label for='mealType'>Meal type</label>
						<br />
						<select name='mealType' value={values.mealType} onChange={onChange} size='10'>
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
						<select name='category' value={values.category} onChange={onChange} size='10'>
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
						<select name='dietRestriction' value={values.dietRestriction} onChange={onChange} size='10'>
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
							value={values.tags}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-group'>
						<label for='measurementsType'>Preffered units of measurements</label>
						<br />
						<select name='measurementsType' value={values.measurementsType} onChange={onChange} size='10'>
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
							value={values.preparation}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					<div className='form-group'>
						<input
							type='url'
							placeholder='Preparation photos (optional)'
							name='preparationPhotos'
							value={values.preparationPhotos}
							onChange={(e) => onChange(e)}
							// required
						/>
					</div>
					{/* <input type='submit' className='btn btn-primary' value='Create recipe' /> */}
				</form>
				<button onClick={this.continue}>Next</button>
			</Fragment>
		);
	}
}

export default StepOne;
