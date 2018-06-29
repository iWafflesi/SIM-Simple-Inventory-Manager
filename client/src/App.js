import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import LoginModal from "./components/Modal";


class App extends React.Component {
	state = {
		openModal: true
	}


	handleModal = () => {
		console.log(this);
		console.log(this.state.openModal);

	
		this.setState((prevState) => ({openModal:!prevState.openModal}));
	
		console.log(this.state.openModal);	
	};
	

	render = () => (
		<div>
			<Nav 
			handleModal = { 
				this.handleModal
			}/>
			<Jumbotron />
			<LoginModal
			openModal={this.state.openModal} />
		</div>

	);
};


export default App;