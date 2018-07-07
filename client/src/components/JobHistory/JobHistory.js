import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import JobsTable from "../JobsTable";

//need more information on jobs to create functionality and rendering
//also need a link to JobDetail page in first panel heading along with the other things I cant make out in picure


class JobHistory extends Component {
	state = {
		jobs: [],
		name: "",
		jobNumber: "",
	};
	componentDidMount() {
		this.getJobs();
	};
	getJobs = () => {
		API.getJobs().then((res) => {
			this.setState({ jobList: res.data })
		});
	};

	render() {
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
					<div className="panel heading">Job History</div>
					<div className="panel-body">
						<table className="table table-hover" id='jobsHistoryTable'>
							<thead>
								<tr>
									<th scope="col">Job Number</th>
									<th scope="col">Part SKU</th>
									<th scope="col">Quantity</th>
									<th scope="col">Username</th>
									<th scope="col">Date</th>
								</tr>
							</thead>
							<tbody>
								<JobsTable />
							</tbody>
						</table>

					</div>
				</div>
			</React.Fragment>
		);
	};
};

export default JobHistory;