import React from "react";
import "./NavButton.css";

const NavBtn = props => (
	<button {...props} className="btn btn-outline-dark navButton">
		{props.children}
	</button>
);

export default NavBtn;
