import React from "react";
import "./JobCard.css"

export const JobCard = props => (
<div class="jobCardHolder">
	<div {...props} class="card">
		<div class="card-body">
			<h4 class="card-title">Job {props.jobNum}</h4>
			<h6 class="card-subtitle mb-2 text-muted">SKU: {props.sku}</h6>
			<h6 class="card-subtitle mb-2 text-muted">Qty: {props.qty}</h6>
			<p class="card-text">Notes: {props.notes}Priority #2, please keep tolerances within .002 in.</p>
		</div>
	</div>
</div>
);

export default JobCard;
