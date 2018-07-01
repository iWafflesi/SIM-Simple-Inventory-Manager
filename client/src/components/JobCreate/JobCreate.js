import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

//********THIS PAGE DOES NOT HAVE A ROUTE AND CANNOT BE SEEN!!!!!!!!!!

class JobCreate extends Component {
	state = {
		parts: [],
		jobNumber: "",
		sku: "",
		quantity: "",
		username: "",
		date: "",
	
	};

	componentDidMount() {
		this.loadParts();
	}

	loadParts = () => {
		API.getParts()
			.then(res =>
				this.setState({ parts: res.data,jobNumber: "", username: "", sku: "", quantity: "",date: "", username:"" })
			)
			.catch(err => console.log(err));
	};
// ******* find out how to delete material used instead of part
	deletePart = id => {
		API.deletePart(id)
			.then(res => this.loadParts())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { username, value } = event.target;
		this.setState({
			[username]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.username && this.state.sku) {
			API.savePart({
				jobNumber: this.state.jobNumber,
				sku: this.state.sku,
				quantity: this.state.quantity,
				username: this.username,
				date: this.date
			})
			.then(res => this.loadParts())
			.catch(err => console.log(err));
		}
	};
	
	render() {
		return (
			<React.Fragment>
			<Nav />
			<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
			<NavBtn><Link to="/jobs/jobhistory">History</Link></NavBtn>
			<NavBtn><Link to="/jobs/create">Create</Link></NavBtn>
				<Row>
					<Col size="md-12">

					<Table>
						<form>
						<Input
								value={this.state.username}
								onChange={this.handleInputChange}
								name="username"
								placeholder="username (required)"
								/>
								<Input
								value={this.state.jobNumber}
								onChange={this.handleInputChange}
								name="jobNumber"
								placeholder="jobNumber (optional)"
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
						</Table>
					</Col>
					</Row>
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