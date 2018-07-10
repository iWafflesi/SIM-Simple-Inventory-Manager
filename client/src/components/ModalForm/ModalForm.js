import React from "react";
import API from "../../utils/API"
import { Redirect } from 'react-router-dom';


class ModalForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// openModal: true,
			isLoggedIn: false,
			username: '',
			password: '',
		}
		this.login = this.login.bind(this)
	}
	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	login = (event) => {
		event.preventDefault();
		console.log('hi');
		API
			.login({ username: this.props.username, password: this.props.password })
			.then(res => {
				console.log(res.data);
				this.setState({ isLoggedIn: res.data });
				this.props.closeModal();
				// this.setState({openModal: false})
				// console.log (this.state.openModal + " close my modal");
			})
			.catch(err => console.log(err.response));
	}
	
	render() {
		if (this.props.isLoggedIn) {
			return <Redirect to="/" />
		}
		return (
			<div>
				<h3 className='modal__title'> User Log In</h3>
​
				<form className='addOption' login={this.handleAddOption}>
					<input className='username__input' type="text" name="username" value={this.props.username} onChange={this.props.getUsername} /><br />
					<input className='password__input' type="text" name="password" value={this.props.password} onChange={this.props.getPassword} />
				</form>
				<button className='button' onClick={ this.login }>Log In</button>
			</div>
		)
	}
}
export default ModalForm;
 
  