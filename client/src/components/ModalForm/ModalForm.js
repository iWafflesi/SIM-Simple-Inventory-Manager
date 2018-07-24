import React from "react";
import { Redirect } from 'react-router-dom';


class ModalForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			username: '',
			password: '',
		}

	}
	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		})
	}

	render() {
		if (this.props.isLoggedIn) {
			return <Redirect to="/" />
		}
		return (
			<React.Fragment>
				<div className="wrapper">
					<div className="cssTitle">
						<h3 className='modal__title'> User Log In</h3>
						<hr />
					</div>

					<div className="cssForm">
						<form className='addOption' login={this.handleAddOption}>
							<input className='username__input' type="text" name="username" value={this.props.username} onChange={this.props.getUsername} /><br />
							<input className='password__input' type="password" name="password" value={this.props.password} onChange={this.props.getPassword} />
						</form>
					</div>
					<div>
						<button className='button' type="submit" onClick={this.props.login}>Log In</button>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default ModalForm;

