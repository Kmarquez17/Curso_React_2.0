import React, { Component } from 'react';

class BadgeForm extends Component {
	handleClick = () => {
		// console.log(this.props.formValues.email);
	};

	// handleSubmit = e => {
	// 	e.preventDefault();
	// };

	render() {
		return (
			<div onSubmit={this.props.handleSubmit}>
				<h1> New Attendant </h1>
				<form>
					<div className="form-group">
						<label> Firts Name: </label>
						<input
							onChange={this.props.handleChange}
							className="form-control"
							type="text"
							name="firstName"
							value={this.props.formValues.firstName}
						/>
					</div>
					<div className="form-group">
						<label> Last Name: </label>
						<input
							onChange={this.props.handleChange}
							className="form-control"
							type="text"
							name="lastName"
							value={this.props.formValues.lastName}
						/>
					</div>
					<div className="form-group">
						<label> Email: </label>
						<input
							onChange={this.props.handleChange}
							className="form-control"
							type="email"
							name="email"
							value={this.props.formValues.email}
						/>
					</div>
					<div className="form-group">
						<label> Job Title: </label>
						<input
							onChange={this.props.handleChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
					</div>
					<div className="form-group">
						<label> Twitter: </label>
						<input
							onChange={this.props.handleChange}
							className="form-control"
							type="text"
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>
					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>
					{this.props.error && <p className="text-danger"> {this.props.error.message} </p>}
				</form>
			</div>
		);
	}
}

export default BadgeForm;
