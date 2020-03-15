import React, { Component } from 'react';

class Header extends Component {
	state = {};
	render() {
		return (
			<section className="header">
				<div className="main-wrapper">
					<div className="header-title">
						<h1>COVID-19</h1>
						<h1>{this.props.children}</h1>
					</div>
					<div className="header-province"></div>
				</div>
			</section>
		);
	}
}

export default Header;
