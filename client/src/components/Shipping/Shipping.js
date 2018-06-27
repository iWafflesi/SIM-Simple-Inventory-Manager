import React from "react";
// import Router from "../Router";
import Nav from "../Nav";
import { Row, Col } from "../Grid";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom';

const Shipping = () => (
	
		<React.Fragment>
			<Nav>
				<Row>
					<Col size='md-4'>
				<NavBtn><Link to="/inventory/current">Inventory</Link></NavBtn>
				</Col>
				<Col size='md-4'>
				<NavBtn><Link to="/jobs">Production</Link></NavBtn>
				</Col>
				<Col size='md-4'>
				<NavBtn><Link to="/shipping">Shipping</Link></NavBtn>
					</Col>
				</Row>
			</Nav>
			Shipping
		</React.Fragment>

);

export default Shipping;
