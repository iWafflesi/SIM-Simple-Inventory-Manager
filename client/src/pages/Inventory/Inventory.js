import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Table from "../../components/Table/Table";

class Materials extends Component {
	state = {
		materials: [],
		name: "",
		sku: "",
		price: "", 
		quantity: ""
	};

	componentDidMount() {
		this.loadMaterials();
	}

	loadMaterials = () => {
		API.getMaterials()
			.then(res =>
				this.setState({ materials: res.data, name: "", sku: "", price: "", quantity: "" })
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
				price: this.state.price,
				quantity: this.state.quantity
			})
			.then(res => this.loadMaterials())
			.catch(err => console.log(err));
		}
	};
	
	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Table>
							<form>
								<Row>
									<Col size="md-6">
										<Input
											value={this.state.title}
											onChange={this.handleInputChange}
											name="material"
											placeholder="Material (required)"
										/>
									</Col>
									<Col size="md-5">
										<Input
											value={this.state.title}
											onChange={this.handleInputChange}
											name="qty"
											placeholder="Qty (required)"
											/>
									</Col>
									<Col size="md-1">
										<FormBtn
											disabled={!(this.state.author && this.state.title)}
											onClick={this.handleFormSubmit}
											>
											Submit
										</FormBtn>
									</Col>
								</Row>
							</form>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col size="md-12">
						<Table>
						<List>
                {this.state.materials.map(material => {
                  return (
                    <ListItem key={material._id}>
                      <a href={"/materials/" + material._id}>
                        <strong>
                          {material.title} by {material.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteMaterial(material._id)} />
                    </ListItem>
                  );
                })}
              </List>
						</Table>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Materials;
