import React from "react";
import "./NavButton.css";

const NavBtn = props => (
	<button {...props} style={{ marginBottom: 10, width: "100px" }} className="btn btn-outline-dark">
		{props.children}
	</button>
);

export default NavBtn;
