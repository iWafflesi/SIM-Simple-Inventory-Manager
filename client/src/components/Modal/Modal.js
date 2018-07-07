import React from "react";
import Modal from "react-modal";
import ModalForm from "./../ModalForm"


const LoginModal = (props) => (
<Modal
	isOpen= {props.openModal}
	contentLabel="selected Option"
>
<ModalForm 
closeModal={props.closeModal}
username ={props.username}
password = {props.password}
getUsername = {props.getUsername}
getPassword = {props.getPassword}
/>
	</Modal>
);
	export default LoginModal;
