import React, { Component } from "react";
import API from "../../utils/API";
import NavBtn from "../NavButton"
import UserList from "../DeleteUser/Deleteuser";
import "./Register.css";

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

	componentDidMount() {
		this.getUsers();
	}
	// Method to register a new user
	register = (event) => {
		event.preventDefault();
		API
			.register({ username: this.state.username, password: this.state.password, admin: this.state.admin })
			.then((user) => {
				console.log(user);
				console.log(user.data);
				console.log("username " + this.state.username);
				console.log("password " + this.state.password);
				console.log("admin " + this.state.admin);
				this.setState({ success: user.data })

			})
			.catch(err => console.log(err.response.data));
	}


	getUsers = () => {
		API.getUsers()
			.then((res) => {
				// console.log("You're in the get users function");
				console.log("userList:", res.data)
				this.setState({ userList: res.data })
			})
			.catch(err => this.getUsers());
	};

	deleteUser = id => {
		API.deleteUser(id)
			.then(res => this.getUsers())
			.catch(err => console.log(err));
	};
	render() {

		return (
		
			<React.Fragment>

				<div className="card">
				<div className="card-body">
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
							<div>
								<input
									className="checkbox"
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
				</div>
				</React.Fragment>
		)
	}
}

export default CreateUser;