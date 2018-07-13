import React, { Component } from "react";
import API from "../../utils/API";
import NavBtn from "../../components/NavButton"
import UserTable from "../../components/UserTable";
import "./Register.css";
import { Col, Row, Container } from "../../components/Grid";

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
				this.setState({ success: user.data });
				this.getUsers();

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

	// deleteUser = id => {
	// 	API.deleteUser(id)
	// 		.then(res => this.getUsers())
	// 		.catch(err => console.log(err));
	// };
	render() {
		console.log(this.props.userList, "trying to get some users")
		return (
			<React.Fragment>
				<Container fluid>
				
			<div className="card">
			<div className="card-body">
				<Row>
					<Col size="md-6 sm-12">

	<div className="panel panel-default">
				<div className="panel heading text-center"><h3>Current Staff</h3></div>
				<div className="panel-body">
					<table className="table table-hover" id='JobsTable'>
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Access</th>

							</tr>
						</thead>
						<tbody>
							<UserTable
							userList= {this.state.userList}
							getUsers={this.getUsers}
							/>
						</tbody>
					</table>
				</div>
			</div>
					</Col>
				</Row>
			</div>
			</div>
				</Container>
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