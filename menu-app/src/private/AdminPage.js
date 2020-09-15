import React from 'react';
import { Nav, Navbar, NavDropdown, Tab, Col, Row } from 'react-bootstrap';
import bicons from 'bootstrap-icons/bootstrap-icons.svg';
import DashboardTab from './dashboard/DashboardTab';
import './AdminPage.css';


function AdminPage({user, logOut}) {
    const logout = function () {
        logOut();
    }

    return (
        <>
            <Navbar className="justify-content-between">
                <Navbar.Brand href="#home">
                    <svg
                        alt=""
                        width="28"
                        height="28"
                        className="bi d-inline-block align-top"
                    >
                        <use xlinkHref={bicons + '#wallet'}/>
                    </svg>
                    <span className="label">myWallet</span>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <NavDropdown title={"Logged in as " + user.name} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <Row id={"AdminRow"} className="p-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Col md={2} sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Accounts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">Settings</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={10} sm={9} id={"TabContent"}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <DashboardTab/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h2>Tab 2</h2>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
        </>
    )
}

export default AdminPage;