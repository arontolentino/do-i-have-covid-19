import React, { Component } from 'react';

class AsessCentreCard extends Component {
	state = {};
	render() {
		return (
			<div className="assess-centre-card">
				<div className="centre-name">
					<h2>William Osler Health System - Peel Memorial</h2>
				</div>
				<div className="centre-details">
					<p>
						<span className="centre-detail-title">Address:</span> 20 Lynch St,
						Brampton, ON L6W 2Z8
					</p>
					<p>
						<span className="centre-detail-title">Phone:</span> (905) 494-2120
					</p>
					<p>
						<span className="centre-detail-title">Hours:</span> Everyday from
						10:00AM to 8:00PM{' '}
					</p>
				</div>
			</div>
		);
	}
}

export default AsessCentreCard;
