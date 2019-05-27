import React, { Component } from 'react';

import BadgesDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

class BadgeDetailsContainer extends Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
		modalIsOpen: false,
	};

	componentDidMount() {
		this.fetchData();
	}

	handleOpenModal = () => {
		this.setState({ modalIsOpen: true });
	};

	handleCloseModal = () => {
		this.setState({ modalIsOpen: false });
	};

	handleDeleteBadge = () => {};

	handleDeleteBadge = async e => {
		this.setState({ loading: true, error: null });

		try {
			await api.badges.remove(this.props.match.params.badgeId);
			this.props.history.push('/badges');
			this.setState({ loading: false });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	render() {
		// const badge = this.state.data;

		if (this.state.loading) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return (
			<BadgesDetails
				modalIsOpen={this.state.modalIsOpen}
				onOpenModal={this.handleOpenModal}
				onCloseModal={this.handleCloseModal}
				onDeleteBadge={this.handleDeleteBadge}
				badge={this.state.data}
			/>
		);
	}
}

export default BadgeDetailsContainer;