import React, {Component} from 'react';
import StepTwo from './StepTwo';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepFour from './StepFour';

export class MainStepForm extends Component {
	state = {
		step: 1,
		// createdRecipe: {
		title: '',
		mealType: '',
		category: '',
		tags: [],
		dietRestriction: '',
		cookingTime: '',
		measurementsType: '',
		coverPhoto: '',
		preparation: [],
		preparationPhotos: [],
		ingredients: []
		// }

		// state = {
		// 	step: 1,
		// 	title: '',
		// 	mealType: '',
		// 	category: '',
		// 	dietRestriction: '',
		// 	cookingTime: '',
		//   measurementsType: '',
		//   coverPhoto: '',
		//   preparation: '',
		//   preparationPhotos: '',
		//   ingredients: ''

		// };
	};

	// Proceed to next step
	nextStep = () => {
		const {step} = this.state;
		this.setState({
			step: step + 1
		});
	};

	// Go back to prev step
	prevStep = () => {
		const {step} = this.state;
		this.setState({
			step: step - 1
		});
	};

	// Handle fields change
	// onChange = (input) => (e) => { this.setState({[input]: e.target.value});};
	// onChange = (e) => { this.setState({[input]: e.target.value});};
	// onChange = (e) => setState({...state, [e.target.name]: e.target.value});

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	render() {
		const {step} = this.state;
		const {
			title,
			mealType,
			category,
			tags,
			dietRestriction,
			cookingTime,
			measurementsType,
			coverPhoto,
			preparation,
			preparationPhotos
		} = this.state;
		const values = {
			title,
			mealType,
			category,
			tags,
			dietRestriction,
			cookingTime,
			measurementsType,
			coverPhoto,
			preparation,
			preparationPhotos
		};

		switch (step) {
			case 1:
				return <StepOne nextStep={this.nextStep} onChange={this.onChange} values={values} />;
			case 2:
				return (
					<StepTwo
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						onChange={this.onChange}
						values={values}
					/>
				);
			case 3:
				return <StepThree nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 4:
				return <StepFour values={values} />;
		}
	}
}

export default MainStepForm;
