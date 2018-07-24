import React from "react";
import { Redirect } from 'react-router-dom';


class ModalForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			username: '',
			password: '',
		}

	}
	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	handleKeyPress = (event) => {
		if(event.key === 'Enter'){
			console.log('enter press here!');
			// this.props.login(this.state.username, this.state.password);
			// document.loginForm.submit();
		}
	}

	render() {
		if (this.props.isLoggedIn) {
			return <Redirect to="/" />
		}
		return (
			<React.Fragment>
				<div className="wrapper">
					<div className="cssTitle">
						<h3 className='modal__title'> User Log In</h3>
						<hr />
					</div>

					<div className="cssForm">
						<form className='addOption' login={this.handleAddOption} name="loginForm">
							<input className='username__input' type="text" name="username" value={this.props.username} onChange={this.props.getUsername} /><br />
							<input className='password__input' type="password" name="password" value={this.props.password} onChange={this.props.getPassword} onKeyPress={this.handleKeyPress} />
							<button className='button' type="submit" onClick={this.props.login}>Log In</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default ModalForm;

