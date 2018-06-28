import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

//********THIS PAGE DOES NOT HAVE A ROUTE AND CANNOT BE SEEN!!!!!!!!!!

class JobDetail extends Component {
	state = {
		parts: [],
		jobNumber: "",
		username: "",
		sku: "",
		quantity: "",
		material: "",
		materialQuantity: "",
		comments:""
	};

	componentDidMount() {
		this.loadParts();
	}

	loadParts = () => {
		API.getParts()
			.then(res =>
				this.setState({ parts: res.data,jobNumber: "", username: "", sku: "", quantity: "",material: "", materialQuantity:"", username:"", comments:"" })
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
				name: this.state.name,
				sku: this.state.sku,
				quantity: this.state.quantity,
				material: this.state.material,
				username: this.username,
				comments: this.comments
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
								placeholder="jobNumber (required)"
								/>
							<Input
								value={this.state.material}
								onChange={this.handleInputChange}
								name="material"
								placeholder="material used (required)"
								/>
								<Input
								value={this.state.materialQuantity}
								onChange={this.handleInputChange}
								name="quantity"
								placeholder="quantity of materials used (required)"
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
								<textarea
								value={this.state.comments}
								onChange={this.handleInputChange}
								name="Comments"
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