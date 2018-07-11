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

	render() {
		if (this.props.isLoggedIn) {
			return <Redirect to="/" />
		}
		return (
			<div>
				<h3 className='modal__title'> User Log In</h3>

				<form className='addOption' login={this.handleAddOption} >
				
				
					<input className='username__input' type="text" name="username" value={this.props.username} onChange={this.props.getUsername} /><br />
					<input className='password__input' type="text" name="password" value={this.props.password} onChange={this.props.getPassword} />
					</form>
					<button className='button' onClick={this.props.login}>Log In</button>
				
				
			</div>
		)
	}
}
export default ModalForm;
 
