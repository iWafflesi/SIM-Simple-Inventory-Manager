import React, { Component } from "react";
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
			{this.state.jobList ? this.state.jobList.map((job, i) => {
				return(
				<tr key={i}>
					<td>{job.id}</td>
					<td>{job.sku}</td>
					<td>{job.quantity}</td>
				</tr>
				)
			}) : null}
		</React.Fragment>
		
	}
}
export default JobsTable;