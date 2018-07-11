import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import LoginModal from "./components/Modal";
import API from "./utils/API";
import OpenNav from "./components/OpenNav";








class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			openModal: false,
			username: "",
			password: "",
		
		};
		this.loggedIn = this.loggedIn.bind(this);
		this.notLoggedIn = this.notLoggedIn.bind(this);
		this.logout = this.logout.bind(this);
		this.loginCheck = this.loginCheck.bind(this);
		this.login = this.login.bind(this);
	}
	// Check login status on load
	componentDidMount() {
		this.loginCheck();
	};

	logout = () =>{
		console.log('hello');
		API.logout();
		this.setState({ isLoggedIn: false });
	};

	// Check login status
	loginCheck = () => {
		API
			.loginCheck()
			.then(res =>
				{
				console.log('res', res);
				if(res.data !== false) {
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
	//close modal
	closeModal = () => {
		this.setState({
			openModal: false,
			username_input: "",
			password_input: "",

		});
		this.setRedirect()
	};
	//open modal
	handleModal = () => {
		this.setState({ openModal: true })
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


	notLoggedIn() {
		return  (
			<div>
				<OpenNav
					handleModal={this.handleModal}
				/>
				<Jumbotron />
				<LoginModal
					login={this.login}
					closeModal={this.closeModal}
					openModal={this.state.openModal}
					username={this.state.username}
					password={this.state.password}
					getUsername={this.getUsername}
					getPassword={this.getPassword}
					loginCheck={this.loginCheck}
					setRedirect={this.setRedirect}
					renderRedirect={this.renderRedirect}
				/>
			</div>
		)
	}

	loggedIn() {
		return (
			<div>
				<Nav
				logout={this.logout}
				// isLoggedIn={this.state.isLoggedIn}
				// handleModal={this.handleModal}
				/>
				<Jumbotron />
			
			</div>
		)
	}

	render() {
console.log(this.state);
		return (
			<div>
				{this.state.isLoggedIn ? this.loggedIn() : this.notLoggedIn()}
			</div>
		)
		

	};
}


	export default App;