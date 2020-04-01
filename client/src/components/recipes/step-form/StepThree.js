import React, {Fragment} from 'react';

export class StepThree extends React.Component {
	continue = (e) => {
		e.preventDefault();
		// PROCESS FORM //
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {
			values: {
				title,
				mealType,
				category,
				tags,
				dietRestriction,
				cookingTime,
				measurementsType,
				coverPhoto,
				preparation,
				preparationPhotos,
				ingredients
			}
		} = this.props;

		// console.log(ingredients);
		// const ingredients = values.ingredients;

		// const ingredientsList = ingredients.map((ingredient) => {
		// 	return <li>{ingredient}</li>;
		// });

		return (
			<Fragment>
				<h1>confirm data</h1>
				<ul>{/* <li>{ingredientsList}</li> */}</ul>
				<ul>
					<li>{title}</li>
					<li>{mealType}</li>
					<li>{category}</li>
					<li>{tags}</li>
					<li>{dietRestriction}</li>
					<li>{cookingTime}</li>
					<li>{measurementsType}</li>
					<li>{coverPhoto}</li>
					<li>{preparation}</li>
					<li>{preparationPhotos}</li>
					{/* <li>{ingredients}</li> */}
				</ul>
				<br />

				<button onClick={this.back}>back</button>
				<button onClick={this.continue}>confirm and continue</button>
			</Fragment>
		);
	}
}

export default StepThree;
