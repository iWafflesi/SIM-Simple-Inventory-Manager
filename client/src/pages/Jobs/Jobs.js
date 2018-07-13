import React, { Component } from "react";
import API from "../../utils/API";
import NavBtn from "../../components/NavButton";
import { Link } from 'react-router-dom';
import JobsTable from "../../components/JobsTable";
import JobCard from "../../components/JobCard";
import "../../components/links.css"


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
		API.getJobs()
			.then((res) => {
				this.setState({ jobList: res.data })
			});
	};

	render() {
		return (
			<React.Fragment>

				<div className="card">
					<div className="card-body">
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

						<div className="jobCardHolder">
							<JobCard />
						</div>
						<div className="panel panel-default">
							<div className="panel heading text-center"><h3>Current Jobs</h3></div>
							<div className="panel-body">
								<table className="table table-hover" id='JobsTable'>
									<thead>
										<tr>
											<th scope="col">Job ID</th>
											<th scope="col">Part Sku</th>
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
					</div>
				</div>
			</React.Fragment>
		)
	};
};

export default Jobs;