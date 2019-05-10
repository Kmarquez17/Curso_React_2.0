import React from 'react';

import './Styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>

				<div className="Badge__section-name">
					<img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
					<h1>
						{this.props.formValues.firtsName} <br /> {this.props.formValues.lastName}{' '}
					</h1>
				</div>

				<div className="Badge__section-info">
					<h3>{this.props.formValues.jobTitle}</h3>
					<div>@{this.props.formValues.twitter}</div>
				</div>

				<div className="Badge__footer ">#platziconf</div>
			</div>
		);
	}
}

export default Badge;