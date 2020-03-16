import React, { Component } from 'react';
import BtnFull from './BtnFull';

import { Link } from 'react-router-dom';

class AsessCentreCard extends Component {
	state = {};
	render() {
		return (
			<div className="assess-centre-card">
				<div className="centre-name">
					<h2>{this.props.centre.name}</h2>
				</div>
				<div className="centre-details">
					<p>
						<span className="centre-detail-title">Address:</span>{' '}
						<a href={this.props.centre.maps_link}>
							{this.props.centre.address}
						</a>
					</p>
					<p>
						<span className="centre-detail-title">Phone:</span>{' '}
						<a href={`tel:${this.props.centre.phone}`}>
							{this.props.centre.phone}
						</a>
					</p>
					<p>
						<span className="centre-detail-title">Hours:</span>{' '}
						{this.props.centre.hours}
					</p>
				</div>

				<div className="centre-learn">
					<a href={this.props.centre.learn_more} class="btn">
						Learn More
					</a>
				</div>
			</div>
		);
	}
}

export default AsessCentreCard;
