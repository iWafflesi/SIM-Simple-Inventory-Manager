import React from "react";
import Nav from "../Nav";
import { Row, Col, Container } from "../Grid";
import "./Inventory.css"
import Table from "../Table";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'


const Inventory = () => (
	<React.Fragment>
		<Nav/>
		<Container fluid>
				<Row>
					<Col size="md-12">
					<Row>
					<Col size="md-4">
						<NavBtn><Link to="/inventory/current">Current</Link></NavBtn>
						</Col>
						<Col size="md-4">
						<NavBtn><Link to="/inventory/history">History</Link></NavBtn>
						</Col>
						<Col size="md-4">
						<NavBtn><Link to="/inventory/receiving">Receiving</Link></NavBtn>
						</Col>
						</Row>
					</Col>
				</Row>
			<Table/>
		</Container>
			Inventory.current
	</React.Fragment>
);

export default Inventory;