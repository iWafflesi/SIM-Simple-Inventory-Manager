import React from "react";
import Modal from "react-modal";

const LoginModal = (props) => (
	<Modal
	//opens when selected option is thruthy
	isOpen={!!props.login}
	//this gets rid of modal when you click background
	onRequestClose={props.handleLogout}
	//label of modal
	contentLabel="selected Option"
	//shutting down modal
	closeTimeoutMS={500}
	className='modal'
	//div contents
	>
	
	<h3 className='modal__title'> User Log In</h3>
	{props.login && <p className='modal__body'>{props.login}</p>}
	<form className='addOption' onSubmit={this.handleAddOption}>
						<input className='username__input' type="text" name="username" />
						<input className='password__input' type="text" name="password" />
					</form>
	<button className='button' onClick={props.handleLogout}>Log In</button>
	</Modal>
	);
	export default LoginModal;