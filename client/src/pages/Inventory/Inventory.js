import React from "react";
import "./Inventory.css"
import NavBtn from "../../components/NavButton";
import { Link } from 'react-router-dom';
import InventoryTable from "../../components/InventoryTable";
import "../../components/links.css"

const Inventory = () => {

	return (
		<React.Fragment>
			<div className="card">
				<div className="card-body">
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
						<div className="panel heading text-center"><h3>Current Inventory</h3></div>
						<div className="panel-body">
							<table className="table table-hover" id='inventoryTable'>
								<thead>
									<tr>
										<th scope="col">Name</th>
										<th scope="col">SKU</th>
										<th scope="col">Quantity</th>
										<th scope="col">Cost</th>
									</tr>
								</thead>
								<tbody>
									<InventoryTable />
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
};


export default Inventory;