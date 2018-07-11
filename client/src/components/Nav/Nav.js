import React from "react";
import NavBtn from "../NavButton";
import API from "../../utils/API"
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = (props) => {
	return (
	<nav className="navbar navbar-expand-lg navbar-dark ">

		<a className="navbar-brand" href="/"><h1>Simple Inventory Manager</h1></a>

			<div className="navLinks">
				<NavBtn className="link"><Link className="linkStyle" to="/inventory/current">Inventory</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/jobs/current">Production</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/shipping">Shipping</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/admin">Admin</Link></NavBtn>
			</div>
			

		<NavBtn className="logout" onClick={props.logout}>Logout</NavBtn>
	</nav>
	)
};
export default Nav;