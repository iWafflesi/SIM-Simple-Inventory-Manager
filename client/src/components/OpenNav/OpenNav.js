import React from "react";
import NavBtn from "../NavButton";
import "../Nav/Nav.css";

const OpenNav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">

            <a className="navbar-brand" href="/"><h1>Simple Inventory Manager</h1></a>

            <NavBtn className="login" onClick={props.handleModal}>Login</NavBtn>
        </nav>

    )
};

export default OpenNav;