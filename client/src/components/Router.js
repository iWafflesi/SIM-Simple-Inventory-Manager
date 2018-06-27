import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Jobs from "./Jobs/Jobs";
import Shipping from "./Shipping/Shipping";
import Inventory from "./Inventory/Inventory";

const Router = () => (
<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App} />
		<Route path="/inventory/current" component={Inventory} />
		<Route path="/jobs" component={Jobs} />
		<Route path="/shipping" component={Shipping} />
		<Route component={App} />
	</Switch>
</BrowserRouter>
);
export default Router;