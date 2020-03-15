import React, { Component } from 'react';
import AsessCentreCard from './AssessCentreCard';

import Butter from 'buttercms';

class AssessCentreList extends Component {
	state = {
		assessmentCentres: []
	};

	componentDidMount() {
		const butter = Butter('bb8e6b3f415a02f3aa781af85d482ceee6a14719');

		butter.content.retrieve(['ontario_assessment_centres']).then(res => {
			console.log(res.data.data.ontario_assessment_centres);

			this.setState({
				assessmentCentres: res.data.data.ontario_assessment_centres
			});
		});
	}
	render() {
		return (
			<div>
				{this.state.assessmentCentres.map(centre => (
					<AsessCentreCard centre={centre} />
				))}
			</div>
		);
	}
}

export default AssessCentreList;
