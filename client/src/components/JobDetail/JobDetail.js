import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'
import "../links.css"
import { Redirect } from 'react-router-dom'


//  routes to this page is dependant on the jobNumber

class JobDetail extends Component {
	constructor(props) {
		super(props)

		this.state = {
			jobNumber: props.match.params.jobNumber,
			username: "",
			sku: "",
			quantity: "",
			material: "",
			materialQuantity: "",
			partPrice: "",
			partName: "",
			comments: "",
			completed: false
		};
	}


	componentDidMount() {
		this.loadJob();
	}

	loadJob = () => {
		console.log("Loading the job...", this.state.jobNumber)
		API.getJob(this.state.jobNumber)
			.then(res => {
				console.log(res);
				this.setState({ username: res.data.username, sku: res.data.sku, quantity: res.data.quantity, })
			}
			)
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
			API.savePart({
				name: this.state.partName,
				sku: this.state.sku,
				quantity: this.state.quantity,
				material: this.state.material,
				price: this.state.partPrice,
				username: this.username,
				comments: this.comments
			})
				.then(this.setState({ completed: true }))
				.catch(err => console.log(err));
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
								<label htmlFor="username">Username</label>
								<Input
									value={this.state.username}
									// onChange={this.handleInputChange}
									readOnly={true}
									name="username"
									placeholder="username (required)"
								/>
								<label htmlFor="jobNumber">Job Number</label>
								<Input
									value={this.state.jobNumber}
									// onChange={this.handleInputChange}
									readOnly={true}
									name="jobNumber"
									placeholder="jobNumber (required)"
								/>
								<label htmlFor="material">Material SKU</label>
								<Input
									value={this.state.material}
									onChange={this.handleInputChange}
									name="material"
									placeholder="sku of material used (required)"
								/>
								<label htmlFor="materialQuantity">Material Quantity</label>
								<Input
									value={this.state.materialQuantity}
									onChange={this.handleInputChange}
									name="materialQuantity"
									placeholder="quantity of materials used (required)"
								/>
								<label htmlFor="partName">Part Name</label>
								<Input
									value={this.state.partName}
									onChange={this.handleInputChange}
									name="partName"
									placeholder="name of individual part"
								/>
								<label htmlFor="partPrice">Part Price</label>
								<Input
									value={this.state.partPrice}
									onChange={this.handleInputChange}
									name="partPrice"
									placeholder="price of individual part"
								/>
								<label htmlFor="sku">Part SKU</label>
								<Input
									value={this.state.sku}
									// onChange={this.handleInputChange}
									readOnly={true}
									name="sku"
									placeholder="Part sku (required)"
								/>
								<label htmlFor="quantity">Quantity of Parts</label>
								<Input
									value={this.state.quantity}
									// onChange={this.handleInputChange}
									readOnly={true}
									name="quantity"
									placeholder="quantity of parts (required)"
								/>
								<textarea
									value={this.state.comments}
									onChange={this.handleInputChange}
									name="comments"
									placeholder="Comments (Optional)"
								/>
								<FormBtn
									disabled={!(this.state.sku && this.state.quantity)}
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