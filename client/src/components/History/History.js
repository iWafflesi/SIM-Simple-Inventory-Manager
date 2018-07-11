import React from "react";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'
import "../links.css"

const TranHistory = () => (
	<React.Fragment>
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
		</React.Fragment>
);

export default TranHistory;