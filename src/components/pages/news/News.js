import React, { Component } from 'react';

import Header from '../../Header';
import Nav from '../../Nav';

class AssessCentres extends Component {
	state = {};
	render() {
		return (
			<div className="news">
				<Header>Latest News</Header>

				<main className="main">
					<div className="secondary-wrapper"></div>
				</main>

				<Nav />
			</div>
		);
	}
}

export default AssessCentres;
