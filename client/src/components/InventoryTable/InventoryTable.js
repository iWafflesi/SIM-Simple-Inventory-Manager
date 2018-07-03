import React, { Component } from "react";
import API from "../../utils/API";

class InventoryTable extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.getMaterials();
	};

	getMaterials = () => {
		API.getMaterials()
			.then(res =>
				this.setState({ materialsList: res.data, sku: "", name: "", quantity: "" })

			).catch(err => this.getMaterials());
	}


	render() {
		return (
		<React.Fragment>
			{this.state.materialList ? this.state.materialList.map((material, i) => {
				<tbody>
					<td>{this.material.sku}</td>
					<td>{this.material.name}</td>
					<td>{this.material.quantity}</td>
				</tbody>
			}) : null}
		</React.Fragment>
		)
	}
}
export default InventoryTable;