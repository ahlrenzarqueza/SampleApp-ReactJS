import React, { Component } from 'react'
import LoginForm from './LoginForm';
import {Col, Row} from 'react-bootstrap';
import Img from 'react-cool-img';
import logo from '../assets/splash-login.jpg';

export default class LoginPage extends Component {
    constructor(props) {
        super(props)

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
            <Row noGutters={true} className="flex-grow-1">
                <Col className="splash-img-cont position-relative" style={{overflow: "hidden", maxHeight: "100%"}}>
                    <Img className="splash-img" 
                        style={{ overflow: "hidden", backgroundColor: "grey", objectFit: 'cover' }} 
                        width="100%" height="100%" src={logo} onLoad={this.onLoadImgEvent}></Img>
                </Col>
                <Col className="form-cont d-flex flex-row align-items-center" md="4">
                    <LoginForm className="p-4 flex-grow-1"></LoginForm>
                </Col>
            </Row>
        )
    }
}
