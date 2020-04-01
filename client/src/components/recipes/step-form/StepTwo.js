import React, {Fragment} from 'react';

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
					<form className=''>
						<div className='form-group'>
							<input
								type='text'
								placeholder='ingredients'
								name='ingredients'
								value={values.ingredients}
								onChange={(e) => onChange(e)}
								// required
							/>
						</div>
					</form>
				</div>
				<button onClick={this.back}>back</button>
				<button onClick={this.continue}>continue</button>
			</Fragment>
		);
	}
}

export default StepTwo;
