import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import "../links.css";
import { Redirect } from 'react-router-dom';


//  routes to this page is dependant on the jobNumber

class JobDetail extends Component {
	constructor(props) {
		super(props)

		this.state = {
			materials: [],
			jobs: [],
			parts: [],
			jobNumber: props.match.params.jobNumber,
			sku: "",
			partQuantity: "",
			material: "",
			materialQuantity: "",
			partPrice: "",
			partName: "",
			notes: "",
			completed: false
		};
	}


	componentDidMount() {
		this.loadJob();
	}

	loadJob = () => {
		API.getJob(this.state.jobNumber)
			.then(res => {
				this.setState({
					sku: res.data.sku, materialQuantity: res.data.materialQuantity,
					material: res.data.material, partPrice: res.data.partPrice, partQuantity: res.data.partQuantity, notes: res.data.notes, partName: res.data.partName
				})
			})
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	deleteJob = id => {
		console.log("You are deleting this job");
			// API.deleteJob(id)
			// .then(res =>
				this.loadJob();

		// )
		// 	.catch(err => console.log(err));

	};

	removeMaterials = event => {
		console.log("remove materials");
		// console.log(materialQuantity);
		console.log(this.state.materialQuantity);
		API.updateMaterial({
			name:this.state.material,
			materialQuantity: - this.state.materialQuantity
		})
	};

	addPart = event => {
		console.log("add products")
		API.savePart({
			partName: this.state.partName,
			sku: this.state.sku,
			partQuantity: this.state.partQuantity,
			material: this.state.material,
			materialQuantity: this.state.materialQuantity
		})
			.then(res => this.loadParts())
			.catch(err => console.log(err));
};

loadParts = () => {
	API.getParts()
		.then(res =>
			this.setState({ parts: res.data, partName: "", sku: "", partQuantity: "", material: "" })
		)
		.catch(err => console.log(err));
};
	

	handleFormSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state.partQuantity, this.state.partName)

		if (this.state.partQuantity && this.state.partName) {
			console.log("for the love of all that is holy!!!!");
			this.removeMaterials();
			this.addPart();
			this.deleteJob();
		}
	};

	render() {
		// If job is completed, return to current jobs page
		if (this.state.completed) {
			return (
				<Redirect to={"/jobs/current"} />
			)
		}

		return (
			<React.Fragment>

				<Row>
					<Col size="md-12">

						<Table>
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
							<form>

								<label htmlFor="jobNumber">Job Number</label>
								<Input
									value={this.state.jobNumber || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="jobNumber"
								// placeholder="jobNumber (required)"
								/>
								<label htmlFor="material">Material Used</label>
								<Input
									value={this.state.material || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="material"
								// placeholder="sku of material used (required)"
								/>
								<label htmlFor="materialQuantity">Material quantity</label>
								<Input
									value={this.state.materialQuantity || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="materialQuantity"
								// placeholder="quantity of materials used (required)"
								/>
								<label htmlFor="partName">Part Name</label>
								<Input
									value={this.state.partName || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="partName"
								// placeholder="name of individual part"
								/>
								<label htmlFor="partPrice">Part Price</label>
								<Input
									value={this.state.partPrice || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="partPrice"
								// placeholder="price of individual part"
								/>
								<label htmlFor="sku">Part SKU</label>
								<Input
									value={this.state.sku || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="sku"
								// placeholder="Part sku (required)"
								/>
								<label htmlFor="partQuantity">Parts Quantity</label>
								<Input
									value={this.state.partQuantity || ''}
									onChange={this.handleInputChange}
									readOnly={true}
									name="partQuantity"
								// placeholder="quantity of parts created (required)"
								/>
								<textarea
									value={this.state.notes || ''}
									onChange={this.handleInputChange}
									name="notes"
									placeholder="notes (Optional)"
								/>
								<FormBtn
									// disabled={!(this.state.sku && this.state.partQuantity)}
									onClick={this.handleFormSubmit}
								>
									Complete Job
							</FormBtn>
							</form>
						</Table>
					</Col>
				</Row>
			</React.Fragment>
		);
	};
}

export default JobDetail;