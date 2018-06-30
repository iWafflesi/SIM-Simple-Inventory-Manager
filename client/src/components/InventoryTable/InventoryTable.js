import React, { Component } from "react";


class InventoryTable extends Component {
	constructer(props) {
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
		return <div className="materialTable">
			{this.state.materialList ? this.state.materialList.map((material, i) => {
				<tbody>
					<td>{this.material.sku}</td>
					<td>{this.material.name}</td>
					<td>{this.material.quantity}</td>
				</tbody>
			}) : null}
		</div>
	}
}
export default InventoryTable;