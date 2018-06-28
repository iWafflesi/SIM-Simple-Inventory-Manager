import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Table from "../../components/Table/Table";
import Nav from "../../components/Nav";
import NavButton from "../../components/NavButton";

class Parts extends Component {
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
								<Input
								value={this.state.qmaterial}
								onChange={this.handleInputChange}
								name="material"
								placeholder="material used (Optional)"
								/>
							<FormBtn
								disabled={!(this.state.sku && this.state.quantity)}
								onClick={this.handleFormSubmit}
								>
								Submit Part
							</FormBtn>
						</form>
						</Table>
					</Col>
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
	}
}

export default Books;
