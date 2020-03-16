import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../Header';
import Nav from '../../Nav';
import IntroBox from '../../IntroBox';
import BtnFull from '../../BtnFull';

class IntroAssess extends Component {
	state = {};
	render() {
		return (
			<div className="assess-intro">
				<Header>Self-Assessment</Header>

				<main className="main">
					<div className="secondary-wrapper">
						<IntroBox>
							<p>
								Use this self-assessment tool to help determine whether you
								should be tested for COVID-19.
							</p>
							<br />
							<p>
								This information is not intended to provide medical advice. If
								you have medical questions, consult a health practitioner or
								your local public health unit.
							</p>
						</IntroBox>

						<BtnFull link="/self-assessment/severe">
							Start Self Assessment
						</BtnFull>
					</div>
				</main>

				<Nav />
			</div>
		);
	}
}

export default IntroAssess;
