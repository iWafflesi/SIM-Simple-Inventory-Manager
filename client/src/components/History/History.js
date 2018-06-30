import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

const TranHistory = () => (
	<React.Fragment>
		<Nav/>
		<NavBtn><Link to="/inventory/current">Current</Link></NavBtn>
		<NavBtn><Link to="/inventory/history">History</Link></NavBtn>
		<NavBtn><Link to="/inventory/receiving">Receiving</Link></NavBtn>
			Inventory.history
		</React.Fragment>
);

export default TranHistory;