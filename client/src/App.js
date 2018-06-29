import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/AddInventory";
// import Materials from "./pages/Materials";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Modal from "./components/Modal/Modal";
// import db from "../../models";


class App extends React.Component {
	state = {
		credentials: {
			username: this.username,
			password: this.password
		},
		openModal: false
	}


	handleModal = () => {
		// const credential = this.state.credentials;
		this.setState((prevState) => ({
			openModal: !prevState.openModal
		}));
		console.log("Login clicked!");
		
	};

	handleLogout = () => {
		this.setState(() => ({
			openModal: false
		}));
	};

	componentDidMount() {
		<p>Component mounted!</p>
		console.log("mounted");
		
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.credentials !== this.state.credentials) {
			console.log("Credentials: ", this.state.credentials)
		}
	}

	render = () => (
		<div>
			<Nav handleModal = { this.handleModal }/>
			<Modal />
		</div>

	);
};


export default App;