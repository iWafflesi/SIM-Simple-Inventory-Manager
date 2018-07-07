import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import JobsTable from "../JobsTable";
import "../links.css"
import { Redirect } from 'react-router-dom'

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

//  setRedirect = () => {
//     this.setState({
//       redirect: true
//     })
// 	};
	
//   renderRedirect = () => {
//     if (this.state.redirect) {
// 			API.getJobs()
// 			.then(res => 
// 				this.setState({ jobList: res.data }))
// 			.catch(err => this.getJobs())
// 			return(
// 				<Redirect to={`/job/detail/${state.jobNumber}`}/>
// 			)		
//     }
//   };

// const Jobs = () => {
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
									<div className="jobButton" key={jobNumber}>
										<button> <Link to={`/job/detail/${job.jobNumber}`}>{job.jobNumber}</Link></button>

										{/* <button
										onClick={this.setRedirect()}> {job.jobNumber}</button> */}
									</div>
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
	)
};
};

export default Jobs;