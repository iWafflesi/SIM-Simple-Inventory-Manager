import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/AddInventory";
// import Materials from "./pages/Materials";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Row, Col } from "./components/Grid";
import NavBtn from "./components/NavButton";
import { Link } from 'react-router-dom';


const App = () => (
		<div>
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
		</div>
	
);

export default App;
