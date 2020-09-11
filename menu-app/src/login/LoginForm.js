import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Api from '../apis'
import { Alert } from 'react-bootstrap';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.alertError = React.createRef();

        this.state = {
            email: '',
            password: '',
            variant: 'success',
            show: false,
            errorMessage: 'Error'  
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

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const me = this;
        this.setState({
            'error': 'success',
            'email': this.emailInput.value,
            'password': this.passwordInput.value
        }, function () {
            const prm = Api.login(this.state);
            prm.then(function (resp) {
                me.setState({
                    variant: 'success',
                    show: false
                }, () => {
                    alert('Successful login.');
                });
            }).catch(function (err) {
                me.setState({
                    show: true,
                    variant: 'danger',
                    errorMessage: err.toString()
                });
            })
        });
    }

    render() {
        return (
            <Form className={this.props.className} onSubmit={this.handleSubmit}>
                <h2>Login to Admin Panel</h2>
                <br/>
                <br/>
                <Alert variant={this.state.variant} show={this.state.show} dismissible={true}
                    ref={el => {this.alertError = el}}>
                    {this.state.errorMessage}
                </Alert>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail Address</Form.Label>
                    <Form.Control name="email" required={true} type="email" placeholder="Enter e-mail" 
                    onChange={this.handleChange} ref={el => {this.emailInput = el}} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required={true} type="password" placeholder="Password" 
                    onChange={this.handleChange} ref={el => {this.passwordInput = el}}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
