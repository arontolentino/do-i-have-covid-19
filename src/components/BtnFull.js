import React, { Component } from 'react';

class BtnFull extends Component {
	state = {};
	render() {
		return <button class="btn-half">{this.props.children}</button>;
	}
}

export default BtnFull;
