import React, { Component } from 'react';

class IntroBox extends Component {
	state = {};
	render() {
		return <div className="intro-box">{this.props.children}</div>;
	}
}

export default IntroBox;
