import React from "react";
import Nav from "../Nav";
// import { Row, Col, Container } from "../Grid";
import "./Inventory.css"
// import Table from "../Table";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import InventoryTable from "../InventoryTable";
import "../links.css"

const Inventory = () => {

	return (
		<React.Fragment>
			<Nav />

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

			<div className="panel panel-default">
				<div className="panel heading">Current Inventory</div>
				<div className="panel-body">
					<table className="table table-hover" id='inventoryTable'>
						<thead>
							<tr>
								<th scope="col">SKU</th>
								<th scope="col">Name</th>
								<th scope="col">Quantity</th>
							</tr>
						</thead>
						<tbody>
							<InventoryTable />
						</tbody>
					</table>
				</div>
			</div>
		</React.Fragment>
	)
};


export default Inventory;