import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Nav from "../Nav";
import PartTable from "../PartTable";


class Shipping extends Component {

	
	render() {
		return (
			<React.Fragment>
			<Container fluid>
			<Nav />
			<div className="card">
			<div className="card-body">
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
			</div>
			</div>
			</Container>
			</React.Fragment>
		);
	};
}

export default Shipping;
