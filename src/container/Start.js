import React, { Component } from 'react';

import App from './App';
import Login from '../components/Login';
class Start extends React.Component {
	constructor() {
		super();
		this.state = {
			isclick: false
		};
	}

	checkUserInput = (data) => {
		console.log(data.username + 'Student');

		if (data.username === 'viraj' && data.password === 'viraj') {
			this.setState({ isclick: true });
		} else {
			alert('You have entered invalid username or password');
		}
	};

	render() {
		console.log('value of -> ' + this.state.isclick);
		let c = this.state.isclick;
		if (c)
			return (
				<div>
					<App />
				</div>
			);

		return (
			<div>
				<Login Check={(data) => this.checkUserInput(data)} />
			</div>
		);
	}
}
export default Start;
