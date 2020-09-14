import React from 'react';
import { Nav, Navbar, Tab, Col, Row } from 'react-bootstrap';
import bicons from 'bootstrap-icons/bootstrap-icons.svg';
import DashboardTab from './DashboardTab';


function AdminPage() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <svg
                        alt=""
                        width="28"
                        height="28"
                        className="bi d-inline-block align-top"
                    >
                        <use xlinkHref={bicons + '#shop-window'}/>
                    </svg>
                    Admin Panel
                </Navbar.Brand>
            </Navbar>
            <Row className="p-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Col md={2} sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Manage Menu</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Manage Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">Manage Users</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={10} sm={9}>
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