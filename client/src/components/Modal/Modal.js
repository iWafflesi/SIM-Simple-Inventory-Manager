import React from "react";
import Modal from "react-modal";
import ModalForm from "./../ModalForm"


const LoginModal = (props) => (
	<Modal
		isOpen={props.openModal}
		onRequestClose={props.closeModal}
		contentLabel="selected Option"
	>
		<ModalForm
			login={props.login}
			loginCheck={props.loginCheck}
			closeModal={props.closeModal}
			username={props.username}
			password={props.password}
			getUsername={props.getUsername}
			getPassword={props.getPassword}
			setRedirect={props.setRedirect}
			renderRedirect={props.renderRedirect}
		/>
		
	</Modal>
);
export default LoginModal;
