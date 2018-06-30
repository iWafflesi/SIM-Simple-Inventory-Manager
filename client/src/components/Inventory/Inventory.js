import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import InventoryTable from "../InventoryTable";

const Inventory = () => {

return (
			<React.Fragment>
			<Nav />
			<NavBtn><Link to="/inventory/current">Current</Link></NavBtn>
			<NavBtn><Link to="/inventory/history">History</Link></NavBtn>
			<NavBtn><Link to="/inventory/receiving">Receiving</Link></NavBtn>
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
							<InventoryTable />
						</table>
					</div>
				</div>
			</React.Fragment>
);
};


export default Inventory;