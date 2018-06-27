import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

const JobDetail = () => (
	<React.Fragment>
		<Nav/>
		<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
		<NavBtn><Link to="/jobs/create">Create</Link></NavBtn>
			Jobs.Detail
	</React.Fragment>
);

export default JobDetail;