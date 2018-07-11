import React from "react";
import { Col, Row, Container } from "../Grid";
import UserTable from "../UserTable";


const DeleteUser = (props) => (

    <React.Fragment>
        <Container fluid>
            <div className="card">
                <div className="card-body">
                    <Row>
                        <Col size="md-6 sm-12">
                            <div className="panel panel-default">
                                <div className="panel heading text-center"><h3>Current Employees</h3></div>
                                <div className="panel-body">
                                    <UserTable
                                        deleteUser={props.deleteUser}
                                        getUsers={props.getUsers}
                                        userList={props.userList}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </React.Fragment>
);
export default DeleteUser;