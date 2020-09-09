import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''     
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
        this.setState({[e.target.name]: e.target.value}, () => {
            // const {username, password} = this.state;
            // console.log('State:', username, password);
        });
    }

    handleSubmit = (e) => {
        
    }

    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            //     <input name="username" placeholder="Enter username" onChange={this.handleChange}></input>
            //     <input name="password" type="password" placeholder="Enter password" onChange={this.handleChange}></input>
            //     <input type="submit"></input>
            // </form>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" required={true} type="text" placeholder="Enter username" onChange={this.handleChange} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required={true} type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
