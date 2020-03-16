import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class BtnQuiz extends Component {
	state = {};
	render() {
		return (
			<Link class="btn-quiz" to={this.props.link}>
				{this.props.children}
			</Link>
		);
	}
}

export default BtnQuiz;
