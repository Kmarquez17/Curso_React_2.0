import React, { Component } from 'react';

import './Styles/BadgeNew.css';

import header from '../images/badge-header.svg';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
			avatarUrl: '',
		},
		loading: false,
		error: null,
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

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({
			loading: true,
			error: null,
		});
		try {
			await api.badges.create(this.state.form);
			this.setState({
				loading: false,
			});

			this.props.history.push('/badges');
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			});
		}
	};
	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img src={header} alt="" className="BadgeNew__hero-image img-fluid" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge formValues={this.state.form} />
						</div>
						<div className="col-6">
							<BadgeForm
								handleChange={this.handleChange}
								formValues={this.state.form}
								handleSubmit={this.handleSubmit}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
