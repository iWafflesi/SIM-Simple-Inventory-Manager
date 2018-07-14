import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import "../links.css"


class JobCreate extends Component {
	state = {
		jobs: [],
		// jobNumber: "",
		partName: "",
		partsku: "",
		partPrice: "",
		partQty: "",
		materialUsed: "",
		matquantity: "",
		comments: "",
		date: ""
		// username: "",
	};

	componentDidMount() {
		this.loadJobs();
	}

	loadJobs = () => {
		API.getJobs()
			.then(res =>
				this.setState({ 
					jobs: res.data,
					jobNumber: "",
					partName: "",
					partsku: "",
					partPrice: "",
					partQty: "",
					materialUsed: "",
					matquantity: "",
					comments: "",
					date: ""  }))
			.catch(err => console.log(err));
	};
	// ******* find out how to delete material used instead of part
	deleteJob = id => {
		API.deleteJob(id)
			.then(res => this.loadJobs())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.username && this.state.partsku) {
			console.log("This: ", this.state);
			API.saveJob({
				jobNumber: this.state.jobNumber,
				partName: this.state.partName,
				partsku: this.state.partsku,
				partPrice: this.state.partPrice,
				partQty: this.state.partQty,
				materialUsed: this.state.materialUsed,
				matquantity: this.state.matquantity,
				comments: this.state.comments,
				date: this.state.date
				// username: this.state.username,
			})
				.then(res => this.loadJobs())
				.catch(err => console.log(err));
		}
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
						<Row>
							<Col size="md-12">


								<form>
									<Input
										value={this.state.partName}
										onChange={this.handleInputChange}
										name="partName"
										placeholder="Part Name (required)"
									/>

									<Input
										value={this.state.partsku}
										onChange={this.handleInputChange}
										name="partsku"
										placeholder="Part sku (required)"
									/>

									<Input
										value={this.state.partPrice}
										onChange={this.handleInputChange}
										name="partPrice"
										placeholder="Part Price (optional)"
									/>

									<Input
										value={this.state.partQty}
										onChange={this.handleInputChange}
										name="partQty"
											placeholder="Part Quantity (optional)"
										/>


									<Input
										value={this.state.materialUsed}
										onChange={this.handleInputChange}
										name="materialUsed"
										placeholder="Material Used (required)"
									/>
									

									<Input
										value={this.state.matquantity}
										onChange={this.handleInputChange}
										name="matquantity"
										placeholder="quantity of materials used (required)"
									/>

									<Input
										value={this.state.comments}
										onChange={this.handleInputChange}
										name="comments"
										placeholder="Enter any comments here..."
									/>

									<FormBtn
										// disabled={!(this.state.partName && this.state.partQty)}
										onClick={this.handleFormSubmit}
									>
										Start Job
							</FormBtn>
								</form>

							</Col>
						</Row>
					</div>
				</div>
			</React.Fragment>
		);
	};
}

export default JobCreate;