import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'
import "../links.css"

const TranHistory = () => (
	<React.Fragment>
		<Nav/>
		<div className="subLinks">
				<div className="link">
					<NavBtn><Link className="linkStyle" to="/inventory/current">Current</Link></NavBtn>
				</div>
				<div className="link">
					<NavBtn><Link className="linkStyle" to="/inventory/history">History</Link></NavBtn>
				</div>
				<div className="link">
					<NavBtn><Link className="linkStyle" to="/inventory/receiving">Receiving</Link></NavBtn>
				</div>
			</div>
			Inventory.history
		</React.Fragment>
);

export default TranHistory;