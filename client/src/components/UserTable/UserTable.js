import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";

class UserTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			username: ""
		}
	};
	// componentDidMount() {
	// 	this.getUsers();
	// }

	// getUsers = () => {
	// 	API.getUsers()
	// 		.then(res =>
	// 			this.setState({ userList: res.data })
	// 		)
	// 		.catch(err => this.getUsers());
	// };

	// deleteUser = id => {
	// 	API.deleteUser(id)
	// 		.then(res => this.getUsers())
	// 		.catch(err => console.log(err));
	// };

	handleInputChange = event => {
		const { username, value } = event.target;
		this.setState({
			[username]: value
		});
	};

	render() {
		console.log(this.props.userList, "trying to get some users")
		return <React.Fragment>
			{this.props.userList ? this.props.userList.map((user, i) => {

				return (
					<table className="table table-hover" id='JobsTable'>

						<thead>
							<tr>
								<th scope="col">Username</th>
								<th scope="col">Access</th>
							</tr>
						</thead>
						<tbody>
							<tr key={i}>
								<td>{user.username}</td>
								<td>{user.admin ? "Admin" : "User"}</td>
								<td><DeleteBtn onClick={() => this.props.deleteUser(user._id)} /></td>
							</tr>
						</tbody>
					</table>
				)
			}) : (<h3>No Employees</h3>)}
		</React.Fragment>
	}
}

export default UserTable;