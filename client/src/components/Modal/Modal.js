import React from "react";
import Modal from "react-modal";
import ModalForm from "./../ModalForm"


const LoginModal = (props) => (
	


	<Modal
	
	isOpen= {props.openModal}
	contentLabel="selected Option"
	>
<ModalForm 
logout={props.logout}
username ={props.username}
password = {props.password}
getUsername = {props.getUsername}
getPassword = {props.getPassword}
/>
	
	<h3 className='modal__title'> User Log In</h3>
	{props.login && <p className='modal__body'>{props.login}</p>}
	<form className='addOption' onSubmit={this.handleAddOption}>
						<input className='username__input' type="text" name="username" />
						<input className='password__input' type="text" name="password" />
					</form>
	<button className='button'onClick={props.handleLogout}>Log In</button>
	</Modal>
	);
	export default LoginModal;