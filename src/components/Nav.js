import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faNewspaper,
	faNotesMedical,
	faHospital
} from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
	state = {};
	render() {
		return (
			<nav className="nav">
				<div className="main-wrapper">
					<ul className="nav-list">
						<li className="nav-item">
							<FontAwesomeIcon icon={faNewspaper} />
							<p>Latest News</p>
						</li>
						<li className="nav-item">
							<FontAwesomeIcon icon={faNotesMedical} />
							<p>Assessment</p>
						</li>
						<li className="nav-item">
							<FontAwesomeIcon icon={faHospital} />
							<p>Test Centres</p>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
