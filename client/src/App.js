import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/AddInventory";
import Materials from "./pages/Materials";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Row, Col } from "./components/Grid";
import NavBtn from "./components/NavButton";
import { Link } from 'react-router-dom'


const App = () => (
	<Router>
		<div>
			<Nav>
				<Row>
					<Col size='md-4'>
				<NavBtn><Link to="/receiving">Receiving</Link></NavBtn>
				</Col>
				<Col size='md-4'>
				<NavBtn><Link to="/jobs">Production</Link></NavBtn>
				</Col>
				<Col size='md-4'>
				<NavBtn><Link to="/inventory">Inventory</Link></NavBtn>
					</Col>
				</Row>
			</Nav>
			<Switch>
				<Route exact path="/" component={Materials} />
				<Route exact path="/materials" component={Materials} />
				<Route exact path="/materials/:id" component={Detail} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

export default App;
