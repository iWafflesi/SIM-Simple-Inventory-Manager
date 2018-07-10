import React from "react";
import Modal from "react-modal";
import ModalForm from "./../ModalForm"
import "./Modal.css";


const LoginModal = (props) => (
<Modal
closeTimeoutMS={500}
className='modal'

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
