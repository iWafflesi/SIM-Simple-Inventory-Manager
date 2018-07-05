import React, {Component} from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class ModalForm extends React.Component {
	constructor(props){
		super(props)
	this.state = {
		openModel: true,
		username: '',
		password: '',
	}
	this.onSubmit = this.onSubmit.bind(this)
}
onSubmit() {
	axios.get('/api/users/login')
	
		.then(response =>{
			this.props.closeModal()
			console.log('was this optimisitic', response)
		});
	
}

	render = () => (
		<div>
		<h3 className='modal__title'> User Log In</h3>

		<form className='addOption' onSubmit={this.handleAddOption}>
							<input className='username__input' type="text" name="username" value={this.props.username} onChange={this.props.getUsername} /><br/>
							<input className='password__input' type="text" name="password" value={this.props.password} onChange={this.props.getPassword} />
						</form>
		<button className='button' onClick={this.onSubmit}>Log In</button>
</div>
	)
}
export default ModalForm;
