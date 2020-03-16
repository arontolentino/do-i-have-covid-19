import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BtnFull extends Component {
	state = {};
	render() {
		return (
			<Link class="btn" to={this.props.link}>
				{this.props.children}
			</Link>
		);
	}
}

export default BtnFull;
