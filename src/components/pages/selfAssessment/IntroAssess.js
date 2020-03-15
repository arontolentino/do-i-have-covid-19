import React, { Component } from 'react';

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
								These series of questions are based on the Alberta’s COVID-19
								self assessment tool. Ontario will soon plan to launch its own
								COVID-19 self assessment tool.
							</p>
						</IntroBox>

						<BtnFull>Start Self Assessment</BtnFull>
					</div>
				</main>

				<Nav />
			</div>
		);
	}
}

export default IntroAssess;
