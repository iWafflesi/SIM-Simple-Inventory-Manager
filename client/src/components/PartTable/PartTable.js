import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";

class JobsTable extends Component {
	state = {
		parts: [],
		partName: "",
		sku: "",
		partQuantity: "",
		material: "",
	};
	componentDidMount() {
		this.loadParts();
	}

	loadParts = () => {
		API.getParts()
			.then(res =>
				this.setState({ parts: res.data, partName: "", sku: "", partQuantity: "", material: "" })
			)
			.catch(err => console.log(err));
	};

	deletePart = id => {
		API.deletePart(id)
			.then(res => this.loadParts())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { partName, value } = event.target;
		this.setState({
			[partName]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.partName && this.state.sku) {
			API.savePart({
				partName: this.state.partName,
				sku: this.state.sku,
				partQuantity: this.state.partQuantity,
				material: this.state.material
			})
				.then(res => this.loadParts())
				.catch(err => console.log(err));
		}
	};

	render() {
		return <React.Fragment>
			{this.state.parts ? this.state.parts.map((part, i) => {
				return (
					<tr key={i}>
						<td>
							{part.partName}
						</td>
						<td>
							{part.sku}
						</td>
						<td>
							{part.partQuantity}
						</td>
						<td>
							<DeleteBtn onClick={() => this.deletePart(part._id)} />
						</td>
					</tr>
				)
			}) : (<h3>No Results to Display</h3>)}
		</React.Fragment>
	}
}

export default JobsTable;