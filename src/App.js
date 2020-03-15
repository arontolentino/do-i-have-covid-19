import React from 'react';

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

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Redirect from="/" exact to="/self-assessment" />
					<Route path="/news" component={News} />

					<Route path="/self-assessment" component={IntroAssess} />
					<Route path="/assessment-centres" component={AssessCentres} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
