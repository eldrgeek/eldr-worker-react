import React from 'react';
import ReactDOM from 'react-dom';
import MyClass from './myClass';
import MyFunction from './myFunction';
import MyFunction1 from './MF3';

import './styles.css';

function App() {
	return (
		<div className="App">
			<h1>Simple BG loader</h1>
			<MyClass />
			<MyFunction />
			<MyFunction1 />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
