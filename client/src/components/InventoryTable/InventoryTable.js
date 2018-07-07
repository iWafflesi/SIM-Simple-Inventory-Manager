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
				this.setState({ materialList: res.data })

			).catch(err => this.getMaterials());
	}


	render() {
		return (<React.Fragment>
			{this.state.materialList ? this.state.materialList.map((material, i) => {
				return(
				<tr key={i}>
					{/* <td>{material._id}</td> */}
					<td>{material.name}</td>
					<td>{material.sku}</td>
					<td>{material.quantity}</td>
					<td>${material.price}</td>
				</tr>
				)
			}) : null}
		</React.Fragment>
		)
	}
}
export default InventoryTable;