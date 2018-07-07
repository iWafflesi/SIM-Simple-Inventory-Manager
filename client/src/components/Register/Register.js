import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import Nav from "../Nav";
import NavBtn from "../NavButton"

class CreateUser extends Component {
	state = {
		success: false,
		username: "",
		password: "",
		admin: false
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,

		})
	}

	// Method to register a new user
	register = (event) => {
		event.preventDefault();
		API
			.saveUser({ username: this.state.username, password: this.state.password, admin: this.state.admin })
			.then((user) => {

				console.log(user.data);
				console.log("username " + this.state.username);
				console.log("password " + this.state.password);
				console.log("admin " + this.state.admin);
				this.setState({ success: user.data })

			})
			.catch(err => console.log(err.response.data));
	}

	render() {
		// If Signup was a success, take them to the Login page
		if (this.state.success) {
			return <Redirect to="/" />
		}

		return (
		
				<div className="container admin">
				<Nav />
					<div className="row justify-content-center">
						<form>
							<h3>Create a new user</h3>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleInputChange}
									className="form-control"
									placeholder="Username" />
								<small id="usernameHelp" className="form-text text-muted">Enter username</small>
							</div>

							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleInputChange}
									className="form-control"
									placeholder="Password"
								/>
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="admin"
									value={this.setState.admin = true}
									onChange={this.handleInputChange}
								/>
								<label htmlFor="admin">Admin Access</label>
							</div>

							<NavBtn type="submit" className="btn btn-success linkStyle" onClick={this.register}>User Created</NavBtn>
						</form>
					</div>
				</div>
		)
	}
}

export default CreateUser;