import React from "react";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import "../Nav/Nav.css"

class AdminNav extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
		console.log(this.props)
	}

	
	render() {
		
	return (
		<nav className="navbar navbar-expand-lg navbar-dark ">

			<a className="navbar-brand" href="/"><h1>Simple Inventory Manager</h1></a>

			<div className="navLinks">
				<NavBtn className="link"><Link className="linkStyle" to="/inventory/current">Inventory</Link></NavBtn>
			
				<NavBtn className="link"><Link className="linkStyle" to="/jobs/current">Production</Link></NavBtn>
			
				<NavBtn className="link"><Link className="linkStyle" to="/shipping">Shipping</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/admin">Admin</Link></NavBtn> 
				
			</div>
			<NavBtn className="link"><Link className="linkStyle" to="/" onClick={this.props.logout}>Logout</Link></NavBtn>
		</nav>
	)}
};
export default AdminNav;