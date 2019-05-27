import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/BadgeDetails.css';

import Badge from '../components/Badge';
import confLogo from '../images/platziconf-logo.svg';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const UseIncreaseCount = max => {
	const [count, setCount] = React.useState(max);
	if (count > max) {
		setCount(0);
	}

	return [count, setCount];
};
const BadgeDetails = props => {
	const [count, setCount] = UseIncreaseCount(4);
	const badge = props.badge;
	console.log('hol');
	return (
		<React.Fragment>
			<div className="BadgeDetails__hero">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src={confLogo} alt="Logo de la Conferencia" />
						</div>
						<div className="col-6 BadgeDetails__hero-attendant-name">
							<h1>
								{badge.firstName}
								{badge.lastName}
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<Badge formValues={badge} />
					</div>
					<div className="col-6">
						<h2>Actions</h2>
						<button
							onClick={() => {
								setCount(count + 1);
							}}
							className="btn btn-primary mr-4"
						>
							Incrase Count {count}
						</button>
						<div>
							<Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">
								Edit
							</Link>
						</div>
						<div>
							<button onClick={props.onOpenModal} className="btn btn-danger">
								Delete
							</button>
							<DeleteBadgeModal
								// onOpenModal={props.onOpenModal}
								onDeleteBadge={props.onDeleteBadge}
								onCloseModal={props.onCloseModal}
								modalIsOpen={props.modalIsOpen}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default BadgeDetails;
