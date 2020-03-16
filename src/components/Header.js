import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
	state = {};
	render() {
		return (
			<section className="header">
				<div className="main-wrapper">
					<div className="header-main">
						<div
							className="back-btn"
							onClick={() => this.props.history.goBack()}
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</div>

						<div className="header-title">
							<h1>COVID-19</h1>
							<h1>{this.props.children}</h1>
						</div>
					</div>
					<div className="header-province">
						<select name="province" id="province-select">
							<option value="AB" disabled>
								AB
							</option>
							<option value="BC" disabled>
								BC
							</option>
							<option value="MB" disabled>
								MB
							</option>
							<option value="NB" disabled>
								NB
							</option>
							<option value="NL" disabled>
								NL
							</option>
							<option value="NT" disabled>
								NT
							</option>
							<option value="NS" disabled>
								NS
							</option>
							<option value="NU" disabled>
								NU
							</option>
							<option value="ON" selected="selected">
								ON
							</option>
							<option value="PE" disabled>
								PE
							</option>
							<option value="QC" disabled>
								QC
							</option>
							<option value="SK" disabled>
								SK
							</option>
							<option value="YT" disabled>
								YT
							</option>
						</select>
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
				</div>
			</section>
		);
	}
}

export default withRouter(Header);
