import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import Nav from "../Nav";


class Shipping extends Component {
	state = {
		parts: [],
		name: "",
		sku: "",
		quantity: "",
		material: "",
	};

	componentDidMount() {
		this.loadParts();
	}

	loadParts = () => {
		API.getParts()
			.then(res =>
				this.setState({ parts: res.data, name: "", sku: "", quantity: "",material: "" })
			)
			.catch(err => console.log(err));
	};

	deletePart = id => {
		API.deletePart(id)
			.then(res => this.loadParts())
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
			API.savePart({
				name: this.state.name,
				sku: this.state.sku,
				quantity: this.state.quantity,
				material: this.state.material
			})
			.then(res => this.loadParts())
			.catch(err => console.log(err));
		}
	};
	
	render() {
		return (
			<Container fluid>
			<Nav />
				<Row>
					<Col size="md-6 sm-12">

						{this.state.parts.length ? (
							<List>
								{this.state.parts.map(part => (
									<ListItem key={part._id}>
										<Link to={"/parts/" + part._id}>
											<strong>
												{part.name} by {part.sku}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deletePart(part._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
		);
	};
}

export default Shipping;
