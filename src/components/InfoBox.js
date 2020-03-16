import React, { Component } from 'react';

class InfoBox extends Component {
	state = {};
	render() {
		return (
			<div className="info-box">
				<div dangerouslySetInnerHTML={{ __html: this.props.question }} />
			</div>
		);
	}
}

export default InfoBox;
