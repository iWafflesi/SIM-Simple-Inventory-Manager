import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import JobsTable from "../JobsTable";
import JobCard from "../JobCard";
import "../links.css";
// import { Redirect } from 'react-router-dom';

class Jobs extends Component {
	state = {
		jobs: [],
		name: "",
		jobNumber: "",
		redirect: false
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
				<p>This is the grid for jobs</p>
				<div className="panel panel-default">
					<div className="panel heading">
					</div>
					<div className="panel-body">
						{this.state.jobList ?
							this.state.jobList.map((job, jobNumber) => {
								return (
										<JobCard key={jobNumber}/>
							
								)
							})
							: null}
					</div>
				</div>
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
};

export default Jobs;