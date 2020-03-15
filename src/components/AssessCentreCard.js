import React, { Component } from 'react';

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
						{this.props.centre.address}
					</p>
					<p>
						<span className="centre-detail-title">Phone:</span>{' '}
						{this.props.centre.phone}
					</p>
					<p>
						<span className="centre-detail-title">Hours:</span>{' '}
						{this.props.centre.hours}
					</p>
				</div>
			</div>
		);
	}
}

export default AsessCentreCard;
