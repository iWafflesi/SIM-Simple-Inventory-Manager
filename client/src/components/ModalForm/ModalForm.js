import React from "react";
import axios from "axios";

class ModalForm extends React.Component {
	constructor(props){
		super(props)
	this.state = {
		openModel: true
	}
	this.onSubmit = this.onSubmit.bind(this)
}
onSubmit() {
	console.log('eellloo')
	axios.post('/api/login')
	{this.props.logout}
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
