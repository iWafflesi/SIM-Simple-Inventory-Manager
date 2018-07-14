import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";

class JobsTable extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.getJobs();
	};

	getJobs = () => {
		API.getJobs()
			.then(res =>
				this.setState({ jobList: res.data })

			).catch(err => this.getJobs());
	}

	render() {
		console.log("JobList: ", this.state.jobList);
		return <React.Fragment>
			{this.state.jobList ? this.state.jobList.map((job, jobNumber) => {
				return (
					<tr>
						<Link className="square" to={`/job/detail/{job.jobNumber}`} key={jobNumber}>
						<td>■</td>
						</Link>
						<td>{job.jobNumber}</td>
						<td>{job.sku}</td>
						<td>{job.partQuantity}</td>
						<td>{job.date}</td>
					</tr>
				)
			}) : null}
		</React.Fragment>

	}
}
export default JobsTable;