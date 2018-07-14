import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";

class UserTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			username: ""
		}
	};

	
	deleteUser = id => {
	
		API.deleteUser(id)
			.then(()=>{

				this.props.getUsers();
			})
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { username, value } = event.target;
		this.setState({
			[username]: value
		});
	};

	render() {
	
		return <React.Fragment>
			{this.props.userList ? this.props.userList.map((user, i) => {

				return (

					<tr key={i}>
						<td>{user.username}</td>
						<td>{user.admin ? "Admin" : "User"}</td>
						<td>
						<DeleteBtn onClick={() => this.deleteUser(user._id)} />
					</td>
					</tr>

				)
			}) : null}
		</React.Fragment>
	}
}

export default UserTable;