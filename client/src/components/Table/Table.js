import React from "react";
import './Table.css';

const Table = props => 
<div className="card">
  <div className="card-body">
		<div>{props.children}</div>
  </div>
</div>


export default Table;