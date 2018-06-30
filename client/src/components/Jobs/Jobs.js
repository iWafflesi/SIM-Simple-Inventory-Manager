import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';

//need more information on jobs to create functionality and rendering
//also need a link to JobDetail page in first panel heading along with the other things I cant make out in picure


class Jobs extends Component {
	state = {
		jobs: [],
		name: "",
		jobNumber: "",
	};
	componentDidMount(){
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
				<div className="panel panel-default">
					<div className="panel heading">
						<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
						<NavBtn><Link to="/jobs/create">History</Link></NavBtn>
						<NavBtn><Link to="/jobs/create">Create</Link></NavBtn>
					</div>
					<div className="panel-body">
						{this.state.jobList ?
							this.state.jobList.map((job, i) => {
								<div className="jobButton">
									<button><Link to="#"> {job.number}</Link></button>
								</div>
							})
							: null}
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel heading">Current Jobs</div>
					<div className="panel-body">
						<table className="table table-hover" id='jobTable'>
							<thead>
								<tr>
									<th scope="col">Job ID</th>
									<th scope="col">Part</th>
									<th scope="col">Quantity</th>
									<th scope="col">Date</th>
									<th scope="col">Completed By</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
			</React.Fragment>
		);
	};
};

export default Jobs;