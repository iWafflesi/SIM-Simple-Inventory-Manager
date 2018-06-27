import React from "react";
import Nav from "../Nav";
import NavBtn from "../NavButton";
import { Link } from 'react-router-dom'

const JobCreate = () => (
	<React.Fragment>
		<Nav/>
		<NavBtn><Link to="/jobs">Jobs</Link></NavBtn>
		<NavBtn><Link to="/jobs/create">Create</Link></NavBtn>
			Jobs.Create
	</React.Fragment>
);

export default JobCreate;