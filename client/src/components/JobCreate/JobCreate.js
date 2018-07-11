import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'
import "../links.css"

//********THIS PAGE DOES NOT HAVE A ROUTE AND CANNOT BE SEEN!!!!!!!!!!

class JobCreate extends Component {
	state = {
		jobs: [],
		// jobNumber: "",
		sku: "",
		quantity: "",
		username: "",
		date: "",

	};

	componentDidMount() {
		this.loadJobs();
	}

	loadJobs = () => {
		API.getJobs()
			.then(res =>
				this.setState({ jobs: res.data, username: "", sku: "", quantity: "", date: "" })
			)
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
		if (this.state.username && this.state.sku) {
			console.log("This: ", this.state);
			API.saveJob({
				jobNumber: this.state.jobNumber,
				username: this.state.username,
				date: this.state.date,
				sku: this.state.sku,
				quantity: this.state.quantity
			})
				.then(res => this.loadJobs())
				.catch(err => console.log(err));
		}
	};

	render() {
		return (
			<React.Fragment>
				<Nav />
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
									value={this.state.username}
									onChange={this.handleInputChange}
									name="username"
									placeholder="username (required)"
								/>
								<Input
									value={this.state.date}
									onChange={this.handleInputChange}
									name="date"
									placeholder="date used (optional)"
								/>

								<Input
									value={this.state.sku}
									onChange={this.handleInputChange}
									name="sku"
									placeholder="Part sku (required)"
								/>
								<Input
									value={this.state.quantity}
									onChange={this.handleInputChange}
									name="quantity"
									placeholder="quantity of parts (required)"
								/>

								<FormBtn
									disabled={!(this.state.sku && this.state.quantity)}
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




// import React from "react";
// import Nav from "../Nav";
// import NavBtn from "../NavButton";
// import { Link } from 'react-router-dom'

// const JobCreate = () => (
// 	<React.Fragment>
// 		<Nav/>
// 		<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
// 		<NavBtn><Link to="/jobs/create">Create</Link></NavBtn>
// 			Jobs.Create
// 	</React.Fragment>
// );

export default JobCreate;