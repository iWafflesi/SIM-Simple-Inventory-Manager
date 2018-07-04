import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import components
import App from "../App";
import Jobs from "./Jobs/Jobs";
import JobHistory from "./JobHistory/JobHistory";
import Shipping from "./Shipping/Shipping";
import Inventory from "./Inventory/Inventory";
import TranHistory from "./History/History";
import Receiving from "./Receiving/Receiving";
import JobCreate from "./JobCreate/JobCreate";
import JobDetail from "./JobDetail/JobDetail";

const Router = () => (
<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App} />
		<Route path="/inventory/current" component={Inventory} />
		<Route path="/inventory/history" component={TranHistory} />
		<Route path="/inventory/receiving" component={Receiving} />
		<Route path="/jobs/current" component={Jobs} />
		<Route path="/jobs/jobhistory" component={JobHistory} />
		<Route path="/jobs/create" component={JobCreate} />
		<Route path="/job/detail/:jobID" component={JobDetail} />
		<Route path="/shipping" component={Shipping} />
		<Route component={App} />
	</Switch>
</BrowserRouter>
);
export default Router;