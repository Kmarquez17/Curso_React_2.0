import React from 'react';
import './Styles/PageLoading.css';

import Loader from '../components/Loader';

const PageLoading = props => {
	return (
		<div className="PageLoading">
			<Loader />
		</div>
	);
};

export default PageLoading;
