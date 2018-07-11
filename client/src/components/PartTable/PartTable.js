import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class JobsTable extends Component {
	state = {
		parts: [],
		name: "",
		sku: "",
		quantity: "",
		material: "",
	};
	componentDidMount() {
		this.loadParts();
	}

	loadParts = () => {
		API.getParts()
			.then(res =>
				this.setState({ parts: res.data, name: "", sku: "", quantity: "", material: "" })
			)
			.catch(err => console.log(err));
	};

	deletePart = id => {
		API.deletePart(id)
			.then(res => this.loadParts())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.name && this.state.sku) {
			API.savePart({
				name: this.state.name,
				sku: this.state.sku,
				quantity: this.state.quantity,
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
							{part.name}
						</td>
						<td>
							{part.sku}
						</td>
						<td>
							{part.quantity}
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