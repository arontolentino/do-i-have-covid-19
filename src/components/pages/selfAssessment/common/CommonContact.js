import React, { Component } from 'react';
import Butter from 'buttercms';

import Header from '../../../Header';
import Nav from '../../../Nav';
import InfoBox from '../../../InfoBox';
import BtnQuiz from '../../../BtnQuiz';

class CommonContact extends Component {
	state = {
		question: ''
	};

	componentDidMount() {
		const butter = Butter('bb8e6b3f415a02f3aa781af85d482ceee6a14719');

		butter.page
			.retrieve('*', 'common-contact')
			.then(resp => {
				console.log(resp.data.data.fields.question);
				this.setState({ question: resp.data.data.fields.question });
			})
			.catch(function(resp) {
				console.log(resp);
			});
	}
	render() {
		return (
			<div className="assess-q">
				<Header>Self-Assessment</Header>

				<main className="main">
					<div className="secondary-wrapper">
						<InfoBox question={this.state.question} />

						<div className="btn-container">
							<BtnQuiz link="/self-assessment/common-contact-travel">
								Yes
							</BtnQuiz>
							<BtnQuiz link="/self-assessment/common-negative">No</BtnQuiz>
						</div>
					</div>
				</main>

				<Nav />
			</div>
		);
	}
}

export default CommonContact;
