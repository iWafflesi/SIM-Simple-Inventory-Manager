import React from "react";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import "./Nav.css"

class Nav extends React.Component {
	constructor(props){
		super(props)
		this.state = {}
		console.log(this.props)
	}
	// {this.props.admin ?<NavBtn className="link"><Link className="linkStyle" to="/admin">Admin</Link></NavBtn>:null}
	render() {
		{this.props.admin ? <NavBtn className="link"><Link className="linkStyle" to="/admin">Admin</Link></NavBtn> : null}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark ">

			<a className="navbar-brand" href="/"><h1>Simple Inventory Manager</h1></a>

			<div className="navLinks">
				<NavBtn className="link"><Link className="linkStyle" to="/inventory/current">Inventory</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/jobs/current">Production</Link></NavBtn>

				<NavBtn className="link"><Link className="linkStyle" to="/shipping">Shipping</Link></NavBtn>

				
			</div>


			<NavBtn className="link"><Link className="linkStyle" to="/" onClick={this.props.logout}>Logout</Link></NavBtn>
		</nav>
	)}
};
export default Nav;