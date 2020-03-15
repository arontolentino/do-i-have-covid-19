import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import IntroBox from './components/IntroBox';
import BtnFull from './components/BtnFull';

function App() {
	return (
		<div className="App">
			<Header />
			<main className="main">
				<div className="secondary-wrapper">
					<IntroBox>
						<p>
							Use this self-assessment tool to help determine whether you should
							be tested for COVID-19.
						</p>
						<br />
						<p>
							These series of questions are based on the Alberta’s COVID-19 self
							assessment tool. Ontario will soon plan to launch its own COVID-19
							self assessment tool.
						</p>
					</IntroBox>

					<BtnFull>Start Self Assessment</BtnFull>
				</div>
			</main>

			<Nav />
		</div>
	);
}

export default App;
