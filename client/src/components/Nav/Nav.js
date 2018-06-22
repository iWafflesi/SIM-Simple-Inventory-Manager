import React from "react";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
		
    <a className="navbar-brand" href="/">
      Simple Inventory Manager
    </a>
	{props.children}
  </nav>
);

export default Nav;
