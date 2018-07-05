import React, { Component } from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import "../links.css"



class Receiving extends Component {
	state = {
		materials: [],
		name: "",
		sku: "",
		quantity: "",
		material: "",
	};

	componentDidMount() {
		this.loadMaterials();
	}

	loadMaterials = () => {
		API.getMaterials()
			.then(res =>
				this.setState({ parts: res.data, name: "", sku: "", quantity: "" })
			)
			.catch(err => console.log(err));
	};

	deleteMaterial = id => {
		API.deleteMaterial(id)
			.then(res => this.loadMaterials())
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
		if (this.state.name && this.state.sku) {
			API.saveMaterial({
				name: this.state.name,
				sku: this.state.sku,
				quantity: this.state.quantity
			})
				.then(res => this.loadMaterials())
				.catch(err => console.log(err));
		}
	};

	render() {
		return (
			<React.Fragment>
				<Nav />
				<div className="subLinks">
					<div className="link">
						<NavBtn><Link className="linkStyle" to="/inventory/current">Current</Link></NavBtn>
					</div>
					<div className="link">
						<NavBtn><Link className="linkStyle" to="/inventory/history">History</Link></NavBtn>
					</div>
					<div className="link">
						<NavBtn><Link className="linkStyle" to="/inventory/receiving">Receiving</Link></NavBtn>
					</div>
				</div>
				<Row>
					<Col size="md-12">

						<Table>
							<form>
								<Input
									value={this.state.name}
									onChange={this.handleInputChange}
									name="name"
									placeholder="name (Optional)"
								/>
								<Input
									value={this.state.sku}
									onChange={this.handleInputChange}
									name="sku"
									placeholder="sku (required)"
								/>
								<Input
									value={this.state.quantity}
									onChange={this.handleInputChange}
									name="quantity"
									placeholder="quantity (required)"
								/>
								<FormBtn
									disabled={!(this.state.sku && this.state.quantity)}
									onClick={this.handleFormSubmit}
								>
									Receive Order
							</FormBtn>
							</form>
						</Table>
					</Col>
				</Row>
			</React.Fragment>
		);
	};
}

export default Receiving;