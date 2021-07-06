import React from 'react';
import ReactDOM from 'react-dom';
import MyFunction1 from './myFunction1';

function App() {
	return (
		<div className="App">
			<h1>Simple BG loader</h1>
			<MyFunction1 />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
