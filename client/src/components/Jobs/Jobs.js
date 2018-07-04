import React from "react"; 
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import JobsTable from "../JobsTable";

const Jobs = () => {

	return (
		<React.Fragment>
			<Nav />
			<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
			<NavBtn><Link to="/jobs/create">History</Link></NavBtn>
			<NavBtn><Link to="/jobs/create">Create</Link></NavBtn>
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