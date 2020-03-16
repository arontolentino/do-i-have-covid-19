import React, { Component } from 'react';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import 'bulma/css/bulma.css';

import './App.css';

import IntroAssess from './components/pages/selfAssessment/IntroAssess';
import AssessCentres from './components/pages/testCentres/AssessCentres';
import News from './components/pages/news/News';
import Severe from './components/pages/selfAssessment/severe/Severe';

import Common from './components/pages/selfAssessment/common/Common';
import CommonExposed from './components/pages/selfAssessment/common/CommonExposed';
import CommonTravel from './components/pages/selfAssessment/common/CommonTravel';
import CommonContact from './components/pages/selfAssessment/common/CommonContact';
import CommonContactTravel from './components/pages/selfAssessment/common/CommonContactTravel';
import CommonNegative from './components/pages/selfAssessment/common/CommonNegative';
import CommonPositive from './components/pages/selfAssessment/common/CommonPositive';

import AsymptomaticContact from './components/pages/selfAssessment/asymptomatic/AsymptomaticContact';
import AsymptomaticTravel from './components/pages/selfAssessment/asymptomatic/AsymptomaticTravel';
import AsymptomaticPositive from './components/pages/selfAssessment/asymptomatic/AsymptomaticPositive';
import AsymptomaticTentative from './components/pages/selfAssessment/asymptomatic/AsymptomaticTentative';
import SeverePositive from './components/pages/selfAssessment/severe/SeverePositive';

class App extends Component {
	state = {};

	componentDidMount() {
		ReactGA.initialize('225576257');

		const history = createBrowserHistory();

		history.listen(location => {
			ReactGA.set({ page: location.pathname }); // Update the user's current page
			ReactGA.pageview(location.pathname); // Record a pageview for the given page
		});
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Redirect from="/" exact to="/self-assessment" />

						<Route path="/news" component={News} />

						<Route path="/self-assessment" exact component={IntroAssess} />

						{/* SEVERE ROUTES */}
						<Route path="/self-assessment/severe" component={Severe} />
						<Route
							path="/self-assessment/severe-positive"
							component={SeverePositive}
						/>

						{/* COMMON ROUTES */}
						<Route path="/self-assessment/common" component={Common} />
						<Route
							path="/self-assessment/common-exposed"
							component={CommonExposed}
						/>
						<Route
							path="/self-assessment/common-travel"
							component={CommonTravel}
						/>
						<Route
							path="/self-assessment/common-contact"
							component={CommonContact}
						/>
						<Route
							path="/self-assessment/common-contact-travel"
							component={CommonContactTravel}
						/>
						<Route
							path="/self-assessment/common-negative"
							component={CommonNegative}
						/>
						<Route
							path="/self-assessment/common-positive"
							component={CommonPositive}
						/>

						{/* ASYMPTOMATIC ROUTES */}
						<Route
							path="/self-assessment/asymptomatic-contact"
							component={AsymptomaticContact}
						/>
						<Route
							path="/self-assessment/asymptomatic-travel"
							component={AsymptomaticTravel}
						/>
						<Route
							path="/self-assessment/asymptomatic-tentative"
							component={AsymptomaticTentative}
						/>
						<Route
							path="/self-assessment/asymptomatic-positive"
							component={AsymptomaticPositive}
						/>

						<Route path="/assessment-centres" component={AssessCentres} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
