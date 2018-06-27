import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Jobs from "./Jobs/Jobs";
import Shipping from "./Shipping/Shipping";
import Inventory from "./Inventory/Inventory";
import TranHistory from "./History/History";
import Receiving from "./Receiving/Receiving";

const Router = () => (
<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App} />
		<Route path="/inventory/current" component={Inventory} />
		<Route path="/inventory/history" component={TranHistory} />
		<Route path="/inventory/receiving" component={Receiving} />
		<Route path="/jobs" component={Jobs} />
		<Route path="/shipping" component={Shipping} />
		<Route component={App} />
	</Switch>
</BrowserRouter>
);
export default Router;