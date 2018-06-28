import React from "react";
import Modal from "react-modal";


const LoginModal = (props) => (
	<Modal
	isOpen={!!props.openModel}
	contentLabel="selected Option"
	>
	
	<h3> User Log In</h3>
	</Modal>
	);
	export default LoginModal;