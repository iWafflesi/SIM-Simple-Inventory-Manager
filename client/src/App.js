import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/AddInventory";
import Materials from "./pages/Materials";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Row, Col } from "./components/Grid";
import NavBtn from "./components/NavButton";

const App = () => (
	<Router>
		<div>
			<Nav>
				<Row>
					<Col size='md-4 receiveBtn'>
				<NavBtn>Receiving</NavBtn>
				</Col>
				<Col size='md-4 productionBtn'>
				<NavBtn>Production</NavBtn>
				</Col>
				<Col size='md-4 inventoryBtn'>
				<NavBtn>Inventory</NavBtn>
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
