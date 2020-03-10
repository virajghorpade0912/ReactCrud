import React from 'react';

//import Info from './Info';
import './Login.css';

class Login extends React.Component {
	state = {
		fields: { username: '', password: '' }
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		console.log({ [name]: value });
		this.setState({ fields: { ...this.state.fields, [name]: value } });
	};

	handleSumbit = (event) => {
		event.preventDefault();
		console.log(this.state.fields);
		const { username, password } = this.state.fields;

		this.setState({ fields: { username, password } });
		this.props.Check(this.state.fields);
	};

	render() {
		return (
			<div id="main-registration-container">
				<div id="register">
					<h3>Login admin</h3>
					<form method="post" name="userRegistrationForm" onSubmit={this.handleSumbit}>
						<label>Name</label>
						<input
							type="text"
							name="username"
							value={this.state.fields.username}
							onChange={this.handleChange}
						/>

						<label>Password</label>
						<input
							type="password"
							name="password"
							value={this.state.fields.password}
							onChange={this.handleChange}
						/>

						<input type="submit" className="button" value="Login" />
					</form>
				</div>
			</div>
		);
	}
}
export default Login;
