import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import AccountTab from './AccountTab';
import AnimatedNumber from '../AnimatedNumber';

export default class DashboardTab extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <>
                <Row className="mb-4">
                    <Col>
                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <AccountTab></AccountTab>
                            {/* <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Header as="h5">Income</Card.Header>
                            <Card.Body>
                                <AnimatedNumber value={69} default={0}/>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Manage Menus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Header as="h5">Expenses</Card.Header>
                            <Card.Body>
                                <AnimatedNumber value={96} default={0}/>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Manage Orders</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Header as="h5">Others</Card.Header>
                            <Card.Body>
                                <AnimatedNumber value={40} default={0}/>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Manage Users</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}
