import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addIngredient} from '../../actions/recipe';

const IngredientsForm = ({addIngredient, history}) => {
	const [ formData, setFormData ] = useState({
		quantity: '',
		unit: '',
		ingredient: ''
	});

	const {quantity, unit, ingredient} = formData;

	const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

	const onSubmit = (e) => {
		e.preventDefault();
		addIngredient(formData, history);
	};

	return (
		<Fragment>
			{/* <div className='form-wrap'> */}
			<h1 className='text-center'>Add Ingredients</h1>
			<form className='' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='number'
						placeholder='Amount'
						name='quantity'
						value={quantity}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>

				<div className='form-group'>
					<input
						type='text'
						placeholder='Measuring unit'
						name='unit'
						value={unit}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder=''
						name='ingredient'
						value={ingredient}
						onChange={(e) => onChange(e)}
						// required
					/>
				</div>

				<input type='submit' className='btn btn-primary' value='Add ingredient' />
			</form>
		</Fragment>
	);
};

IngredientsForm.propTypes = {
	addIngredient: PropTypes.func.isRequired
};

// const mapStateToProps = (state) => ({
// 	recipe: state.recipe

// });

export default connect(null, {addIngredient})(IngredientsForm);
