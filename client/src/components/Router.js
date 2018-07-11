import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import API from "../utils/API";
// import components
import App from "../App";
import Jobs from "./Jobs/Jobs";
import JobHistory from "./JobHistory/JobHistory";
import Shipping from "./Shipping/Shipping";
import Inventory from "./Inventory/Inventory";
import TranHistory from "./History/History";
import Receiving from "./Receiving/Receiving";
import JobCreate from "./JobCreate/JobCreate";
import JobDetail from "./JobDetail/JobDetail";
import Register from "./Register/Register";
import Nav from "./Nav";
import OpenNav from "./OpenNav";


class Router extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			// 	openModal: false,
			username: "",
			password: "",
		};

		this.logout = this.logout.bind(this);
		this.loginCheck = this.loginCheck.bind(this);
		this.login = this.login.bind(this);
	}
	componentDidMount() {
		this.loginCheck();
	};
	loginCheck = () => {
		API
			.loginCheck()
			.then(res => {
				// console.log('res', res);
				if (res.data !== false) {
					this.setState({
						isLoggedIn: true,
						username: res.data.username
					})
				}
			})
			.catch(err => {
				console.log(err);
				this.setState({ isLoggedIn: false })
			})
	}
	login = (e) => {
		e.preventDefault();
		console.log('hi');
		API
			.login({ username: this.state.username, password: this.state.password })
			.then(res => {
				console.log(res.data);
				this.setState({ isLoggedIn: true });
				this.closeModal();
			})
			.catch(err => console.log(err.response));
	}
	// getUsers = () => {
	// 	API.getUsers()
	// 		.then((res) => {
	// 			// console.log("You're in the get users function");
	// 			console.log("userList:", res.data)
	// 			this.setState({ userList: res.data })
	// 		})
	// 		.catch(err => this.getUsers());
	// };
	logout = () => {
		console.log('hello you are logging out');
		API
			.logout()

		this.setState({ isLoggedIn: false });
	};

	getUsername = (e) => {
		this.setState({ username: e.target.value }
			// ,()=>console.log(this.state.username)
		)
	};
	getPassword = (e) => {
		this.setState({ password: e.target.value }
			// ,()=>console.log(this.state.password)
		)
	};
	render() {
		// if ({Register}){
		// 	console.log("am i even getting this");
		// 	<Register 
		// 	getUsers={this.getUsers}
		// 	userList={this.userList}
		// 	/>
		// }
		return (


			<BrowserRouter>

				<React.Fragment>
					{this.state.isLoggedIn ?
						<Nav
							logout={this.logout}
							// getUsers={this.getUsers}
						/> :
						<OpenNav
							login={this.login}
							username={this.username}
							password={this.password}
							getUsername={this.getUsername}
							getPassword={this.getPassword}
							loginCheck={this.loginCheck}
						/>}
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/inventory/current" component={Inventory} />
						<Route path="/inventory/history" component={TranHistory} />
						<Route path="/inventory/receiving" component={Receiving} />
						<Route path="/jobs/current" component={Jobs} />
						<Route path="/jobs/history" component={JobHistory} />
						<Route path="/jobs/create" component={JobCreate} />
						<Route path="/job/detail/:jobNumber" component={JobDetail} />
						<Route path="/shipping" component={Shipping} />
						<Route path="/admin" component={Register} />
						<Route component={App} />

					</Switch>

				</React.Fragment>
			</BrowserRouter>
		)
	};
};
export default Router;