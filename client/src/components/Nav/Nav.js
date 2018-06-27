import React from "react";
import { Row, Col } from "../Grid";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

const Nav = (props) => {
	console.log("props: ", props);
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">

		<a className="navbar-brand" href="/">
			Simple Inventory Manager
    </a>

		<Row>
			<Col size='md-4'>
				<NavBtn><Link to="/inventory/current">Inventory</Link></NavBtn>
			</Col>
			<Col size='md-4'>
				<NavBtn><Link to="/jobs">Production</Link></NavBtn>
			</Col>
			<Col size='md-4'>
				<NavBtn><Link to="/shipping">Shipping</Link></NavBtn>
			</Col>
		</Row>
		<Row>
			<Col size='md-4'>
				<NavBtn className="login" onClick={props.handleModal}>Login</NavBtn>
			</Col>
		</Row>

	</nav>
	)
};

export default Nav;
