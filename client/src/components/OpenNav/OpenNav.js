import React from "react";
import NavBtn from "../NavButton";
import "../Nav/Nav.css";
import LoginModal from "../Modal";

class OpenNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            openModal: false,
            username: "",
            password: "",

        };
    }
    //close modal
    closeModal = () => {
        this.setState({
            openModal: false,
            username_input: "",
            password_input: "",
        });
    }
    //open modal
    handleModal = () => {
        this.setState({ openModal: true })
    };

    render() {

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark ">

                    <a className="navbar-brand" href="/"><h1>Simple Inventory Manager</h1></a>

                    <NavBtn className="login" onClick={this.handleModal}>Login</NavBtn>
                </nav>
                <LoginModal
                    closeModal={this.closeModal}
                    openModal={this.state.openModal}
                    login={this.props.login}
                    username={this.props.username}
                    password={this.props.password}
                    getUsername={this.props.getUsername}
                    getPassword={this.props.getPassword}
                    loginCheck={this.props.loginCheck}

                />
            </div>
        )
    };
};

export default OpenNav;