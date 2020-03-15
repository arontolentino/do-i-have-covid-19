import React, { Component } from 'react';

import Header from '../../Header';
import Nav from '../../Nav';
import IntroBox from '../../IntroBox';
import BtnFull from '../../BtnFull';

class AssessCentres extends Component {
	state = {};
	render() {
		return (
			<div className="assess-centres">
				<Header>Test Centres</Header>

				<main className="main">
					<div className="secondary-wrapper">
						<IntroBox>
							<p>
								Go to the nearest hospital or assessment centre for testing only
								if your symptoms are severe or a health professional has advised
								you to do so.
							</p>
							<br />
							<p>
								At the moment, there is no specific hospital dedicated to
								conducting tests for COVID-19 but in some areas, designated
								assessment centres are available.
							</p>
						</IntroBox>
					</div>
				</main>

				<Nav />
			</div>
		);
	}
}

export default AssessCentres;
