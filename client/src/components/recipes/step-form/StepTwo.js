import React, {Fragment} from 'react';
import FieldArraysForm from '../IngredientsGroupForm';

export class StepTwo extends React.Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {values, onChange} = this.props;
		return (
			<Fragment>
				<div>
			
				<FieldArraysForm />

				</div>

				<button onClick={this.back}>back</button>
				<button onClick={this.continue}>continue</button>
			</Fragment>
		);
	}
}

export default StepTwo;


