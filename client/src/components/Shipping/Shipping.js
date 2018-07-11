import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Nav from "../Nav";
import PartTable from "../PartTable";


class Shipping extends Component {
	// state = {
	// 	parts: [],
	// 	name: "",
	// 	sku: "",
	// 	quantity: "",
	// 	material: "",
	// };

	// componentDidMount() {
	// 	this.loadParts();
	// }

	// loadParts = () => {
	// 	API.getParts()
	// 		.then(res =>
	// 			this.setState({ parts: res.data, name: "", sku: "", quantity: "",material: "" })
	// 		)
	// 		.catch(err => console.log(err));
	// };

	// deletePart = id => {
	// 	API.deletePart(id)
	// 		.then(res => this.loadParts())
	// 		.catch(err => console.log(err));
	// };

	// handleInputChange = event => {
	// 	const { name, value } = event.target;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// };

	// handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	if (this.state.name && this.state.sku) {
	// 		API.savePart({
	// 			name: this.state.name,
	// 			sku: this.state.sku,
	// 			quantity: this.state.quantity,
	// 			material: this.state.material
	// 		})
	// 		.then(res => this.loadParts())
	// 		.catch(err => console.log(err));
	// 	}
	// };
	
	render() {
		return (
			<React.Fragment>
			<Container fluid>
			<Nav />
				<Row>
					<Col size="md-6 sm-12">

	<div className="panel panel-default">
				<div className="panel heading text-center"><h3>Current Jobs</h3></div>
				<div className="panel-body">
					<table className="table table-hover" id='JobsTable'>
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Part Sku</th>
								<th scope="col">quantity</th>
							</tr>
						</thead>
						<tbody>
							<PartTable />
						</tbody>
					</table>
				</div>
			</div>
					</Col>
				</Row>
			</Container>
	</React.Fragment>
		);
	};
}

export default Shipping;
