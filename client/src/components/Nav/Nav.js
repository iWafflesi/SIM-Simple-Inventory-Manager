
import React from "react";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = (props) => {
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">

		<a className="navbar-brand" href="/">Simple Inventory Manager</a>

			<div className="navLinks">
				<NavBtn className="link"><Link className="linkStyle" to="/inventory/current">Inventory</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/jobs/current">Production</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/shipping">Shipping</Link></NavBtn>
			</div>

		<NavBtn className="login" onClick={props.handleModal}>Login</NavBtn>
	</nav>
	)
};
export default Nav;
