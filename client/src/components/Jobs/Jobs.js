import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import JobsTable from "../JobsTable";
import "../links.css"

const Jobs = () => {

	return (
		<React.Fragment>
			<Nav />
			<div className="subLinks">
				<div className="link">
					<NavBtn><Link className="linkStyle" to="/jobs/current">Jobs</Link></NavBtn>
				</div>
				<div className="link">
					<NavBtn><Link className="linkStyle" to="/jobs/history">History</Link></NavBtn>
				</div>
				<div className="link">
					<NavBtn><Link className="linkStyle" to="/jobs/create">Create</Link></NavBtn>
				</div>
			</div>

			<div className="panel panel-default">
				<p>This is the grid for jobs</p>

			</div>

			<div className="panel panel-default">
				<div className="panel heading">Current Jobs</div>
				<div className="panel-body">
					<table className="table table-hover" id='JobsTable'>
						<thead>
							<tr>
								<th scope="col">Job ID</th>
								<th scope="col">Part Sku</th>
								<th scope="col">Quantity</th>
							</tr>
						</thead>
						<tbody>
							<JobsTable />
						</tbody>
					</table>
				</div>
			</div>
		</React.Fragment>
	)
};


export default Jobs;