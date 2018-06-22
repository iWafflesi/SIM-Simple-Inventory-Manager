import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Table from "../../components/Table/Table";

class Books extends Component {
	state = {
		materials: []
	};

	componentDidMount() {
		this.loadJobs();
	}

	loadJobs = () => {
		API.getJobs()
			.then(res =>
				this.setState({ materials: res.data })
			)
			.catch(err => console.log(err));
	};

	// loadBooks = () => {
	// 	API.getBooks()
	// 		.then(res =>
	// 			this.setState({ books: res.data, title: "", author: "", synopsis: "" })
	// 		)
	// 		.catch(err => console.log(err));
	// };

	deleteJob = id => {
		API.deleteJob(id)
			.then(res => this.loadJobs())
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
		if (this.state.materials) {
			API.saveJob({
				materials: this.state.materials
				// title: this.state.title,
				// author: this.state.author,
				// synopsis: this.state.synopsis
			})
				.then(res => this.loadJobs())
				.catch(err => console.log(err));
		}
	};
	
	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">

					<Table>
						<form>
							<Input
								value={this.state.title}
								onChange={this.handleInputChange}
								name="title"
								placeholder="Title (required)"
								/>
							<Input
								value={this.state.author}
								onChange={this.handleInputChange}
								name="author"
								placeholder="Author (required)"
								/>
							<TextArea
								value={this.state.synopsis}
								onChange={this.handleInputChange}
								name="synopsis"
								placeholder="Synopsis (Optional)"
								/>
							<FormBtn
								disabled={!(this.state.author && this.state.title)}
								onClick={this.handleFormSubmit}
								>
								Submit Book
							</FormBtn>
						</form>
						</Table>
					</Col>
					<Col size="md-6 sm-12">

						{this.state.books.length ? (
							<List>
								{this.state.books.map(book => (
									<ListItem key={book._id}>
										<Link to={"/books/" + book._id}>
											<strong>
												{book.title} by {book.author}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteBook(book._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Books;
