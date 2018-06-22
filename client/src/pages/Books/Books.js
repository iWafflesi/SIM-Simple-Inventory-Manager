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
		title: "",
		author: "",
		synopsis: ""
	};

	componentDidMount() {
		this.loadMaterials();
	}

	loadMaterials = () => {
		API.getMaterials()
			.then(res =>
				this.setState({ materials: res.data, title: "", author: "", synopsis: "" })
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
		if (this.state.title && this.state.author) {
			API.saveMaterial({
				title: this.state.title,
				author: this.state.author,
				synopsis: this.state.synopsis
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
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name="title"
								placeholder="Title (required)"
								/>
							<Input
								value={this.state.author}
								onChange={this.handleInputChange}
								name="author"
								placeholder="Author (required)"
								/>
							<TextArea
								value={this.state.synopsis}
								onChange={this.handleInputChange}
								name="synopsis"
								placeholder="Synopsis (Optional)"
								/>
							<FormBtn
								disabled={!(this.state.author && this.state.title)}
								onClick={this.handleFormSubmit}
								>
								Submit Book
							</FormBtn>
						</form>
						</Table>
					</Col>
					<Col size="md-6 sm-12">

						{this.state.materials.length ? (
							<List>
								{this.state.materials.map(material => (
									<ListItem key={material._id}>
										<Link to={"/materials/" + material._id}>
											<strong>
												{material.title} by {material.author}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deletematerial(material._id)} />
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

export default Materials;
