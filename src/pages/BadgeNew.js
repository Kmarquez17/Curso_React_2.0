import React, { Component } from 'react';

import './Styles/BadgeNew.css';

import header from '../images/badge-header.svg';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
	state = {
		form: {
			firtsName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		},
	};

	handleChange = e => {
		// const nextForm = this.state.form;

		// nextForm[e.target.name] = e.target.value;

		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};
	render() {
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img src={header} alt="" className="img-fluid" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge formValues={this.state.form} />
						</div>

						<div className="col-6">
							<BadgeForm handleChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
