import React from "react";
// import { Row, Col } from "../Grid";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">

		<a className="navbar-brand" href="/">Simple Inventory Manager</a>

		<NavBtn><Link to="/inventory/current">Inventory</Link></NavBtn>

		<NavBtn><Link to="/jobs">Production</Link></NavBtn>

		<NavBtn><Link to="/shipping">Shipping</Link></NavBtn>

		<NavBtn className="login" onClick={props.handleModal}>Login</NavBtn>

	</nav>
	)
};
export default Nav;

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>