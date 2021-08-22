import React from 'react';
import './App.css';
import MyInfo from './components/MyInfo/MyInfo';
import Card from './components/Card/Card';

function App() {
	return (
		<React.Fragment>
			<ul>
				<li>Do Code Review</li>
				<li>Practice Coding</li>
				<li>Work Out for the First Time In A While</li>
			</ul>
			<MyInfo />
			<Card cardColor={'red'} width={200} height={200} />
			<Card />
			<Card cardColor='green' />
		</React.Fragment>
	);
}

export default App;
