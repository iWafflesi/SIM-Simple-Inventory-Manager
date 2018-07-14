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
		// partsku: "",
		sku: "",
		partPrice: "",
		partQuantity: "",
		material: "",
		notes: "",
		date: "",
		// username: "",
		materialQuantity: "",
		username: "",
		materials: [],
		parts: [],

	
	};

	componentDidMount() {
		this.loadJobs();
	}

	loadJobs = () => {
		API.getJobs()
			.then(res =>
				this.setState({ 
					jobs: res.data,
					materials: res.data,
					parts: res.data,
					jobNumber: "",
					partName: "",
					partsku: "",
					partPrice: "",
					partQty: "",
					material: "",
					materialQuantity: "",
					notes: "",
					date: ""  }))
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
				notes: this.state.notes,
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
										value={this.state.partName}
										onChange={this.handleInputChange}
										name="partName"
										placeholder="Part Created (required)"
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
									<Input
										value={this.state.partQuantity}
										onChange={this.handleInputChange}
										name="partQuantity"
										placeholder="quantity of parts (required)"
									/>
									<Input
										value={this.state.material}
										onChange={this.handleInputChange}
										name="material"
										placeholder="Material used (required)"
									/>

									<Input
									value={this.state.materialQuantity}
									onChange={this.handleInputChange}
									name="materialQuantity"
									placeholder="Material used (required)"
								/>

								<Input
									value={this.state.materialQuantity}
									onChange={this.handleInputChange}
									name="materialQuantity"
									placeholder="material quantity(required)"
								/>
								<Input
									value={this.state.notes}
									onChange={this.handleInputChange}
									name="notes"
									placeholder="notes (optional)"
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

export default JobCreate;