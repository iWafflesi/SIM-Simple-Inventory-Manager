import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import LoginModal from "./components/Modal";
// import API from "./utils/API";



class App extends React.Component {
	state = {
		openModal: false,
		username : "",
		password : ""
	}
//close modal
	handleLogout = () => {
		this.setState({ openModal: false });
	
	}
//open modal
	handleModal = () => {
		this.setState({ openModal: true })
	};

	getUsername = (e) => {
		this.setState({username: e.target.value}
			// ,()=>console.log(this.state.username)
		)
	}; 
	getPassword = (e) => {
		this.setState({password: e.target.value}
			// ,()=>console.log(this.state.password)
		)
	};

	render = () => (
		<div>
			<Nav
				handleModal={
					this.handleModal
				} />
			<Jumbotron />
			<LoginModal
				logout={this.handleLogout}
				openModal={this.state.openModal}
				username={this.state.username}
				password={this.state.password}
				getUsername={this.getUsername}
				getPassword={this.getPassword}
			/>
		</div>

	);
};


export default App;