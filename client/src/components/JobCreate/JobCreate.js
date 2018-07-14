import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'
import "../links.css"


class JobCreate extends Component {
	state = {
		jobs: [],
		// jobNumber: "",
		sku: "",
		partQuantity: "",
		material: "",
		materialQuantity: "",
		username: "",
		date: "",
<<<<<<< HEAD
		materials: [],
		partName: "",
		parts: [],

	
=======
		notes: ""
>>>>>>> master
	};

	componentDidMount() {
		this.loadJobs();
	}

	loadJobs = () => {
		API.getJobs()
			.then(res =>
				this.setState({ jobs: res.data, username: "", sku: "", partQuantity: "",material:"", materialQuantity: "", date: "" })
			)
			.catch(err => console.log(err));
	};
	// ******* find out how to delete material used instead of part
	deleteJob = id => {
		API.deleteJob(id)
			.then(res => 
				this.loadJobs(),
				this.removeMaterials(),
				this.addProducts()
		)
			.catch(err => console.log(err));

	};
removeMaterials = event => {
	console.log("remove materials")
}
addProducts = event => {
	console.log("add products")
}

	handleInputChange = event => {
		const { partName, value } = event.target;
		this.setState({
			[partName]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.username && this.state.sku && this.state.material) {
			console.log("This: ", this.state);
			API.saveJob({
				jobNumber: this.state.jobNumber,
				username: this.state.username,
				date: this.state.date,
				sku: this.state.sku,
<<<<<<< HEAD
				partQuantity: this.state.partQuantity,
				material: this.state.material,
				materialQuantity: this.state.materialQuantity
=======
				quantity: this.state.quantity,
				notes: this.state.notes
>>>>>>> master
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
										value={this.state.partQuantity}
										onChange={this.handleInputChange}
										name="partQuantity"
										placeholder="quantity of parts (required)"
									/>
									<Input
<<<<<<< HEAD
										value={this.state.material}
										onChange={this.handleInputChange}
										name="material"
										placeholder="Material used (required)"
									/>
									<Input
										value={this.state.materialQuantity}
										onChange={this.handleInputChange}
										name="materialQuantity"
										placeholder="material quantity(required)"
=======
										value={this.state.notes}
										onChange={this.handleInputChange}
										name="notes"
										placeholder="notes (optional)"
>>>>>>> master
									/>

									<FormBtn
										disabled={!(this.state.sku && this.state.partQuantity && this.state.material && this.state.materialQuantity)}
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