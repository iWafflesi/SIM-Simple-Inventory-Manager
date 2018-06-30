import React, { Component } from "react";
import API from "../../utils/API";

class InventoryTable extends React.Component {
		state = {}
	

	// componentDidMount() {
	// 	this.getMaterials();
	// };

	// getMaterials = () => {
	// 	API.getMaterials().then((res) =>{
	// 		this.setState({ materialsList : res.data})
	// 	})
	// }


	render() {
		return(
		<div>This is the table</div> 
		// <div className="materialTable">
		// 	{this.state.materialList ? this.state.materialList.map((material, i) => 
			
		// 		<tbody key={i}>
		// 			<td>{material.sku}</td>
		// 			<td>{material.name}</td>
		// 			<td>{material.quantity}</td>
		// 		</tbody>
		// 		): null}
		// </div>
		)
	}
}
export default InventoryTable;