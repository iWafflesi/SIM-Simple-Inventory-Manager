import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import "./JobCard.css";

class JobCard extends Component {
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

					<Link className="jobLink" to={`/job/detail/${job.jobNumber}`} key={jobNumber}>
						<div className="card cardsCSS">
							<div className="card-body cardCSS">
								<h4 className="card-title">Job {job.jobNumber}</h4>
								<h6 className="card-subtitle mb-2">SKU: {job.sku}</h6>
								<h6 className="card-subtitle mb-2">Qty: {job.partQuantity}</h6>
								<p className="card-text">Notes: {job.notes}</p>
							</div>
						</div>
					</Link>
				)
			}) : null}
		</React.Fragment>

	}
}
export default JobCard;





