import React from "react";

class ModalForm extends React.Component {
	state = {
		openModel: true
	}


	render = () => (
		<div>
		<h3 className='modal__title'> User Log In</h3>

		<form className='addOption' onSubmit={this.handleAddOption}>
							<input className='username__input' type="text" name="username" value={this.props.username} onChange={this.props.getUsername} /><br/>
							<input className='password__input' type="text" name="password" value={this.props.password} onChange={this.props.getPassword} />
						</form>
		<button className='button' onClick={this.props.logout}>Log In</button>
</div>
	)
}
export default ModalForm;