import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

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
							<NavLink activeClassName="nav-active" to="/news">
								<FontAwesomeIcon icon={faNewspaper} />
								<p>Latest News</p>
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink activeClassName="nav-active" to="/self-assessment">
								<FontAwesomeIcon icon={faNotesMedical} />
								<p>Assessment</p>
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink activeClassName="nav-active" to="/assessment-centres">
								<FontAwesomeIcon icon={faHospital} />
								<p>Test Centres</p>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
