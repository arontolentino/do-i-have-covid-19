import React, { Component } from 'react';

import Header from '../../Header';
import Nav from '../../Nav';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

class AssessCentres extends Component {
	state = {};
	render() {
		return (
			<div className="news">
				<Header>Latest News</Header>
				<main className="main">
					<div className="secondary-wrapper">
						<TwitterTimelineEmbed
							sourceType="list"
							id={'1239644728691392515'}
							noHeader
							noFooter
							linkColor="#6e78f7"
						/>
					</div>
				</main>
				<Nav />
			</div>
		);
	}
}

export default AssessCentres;
