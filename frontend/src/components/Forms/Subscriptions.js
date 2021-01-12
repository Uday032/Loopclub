import React, { Component } from 'react'

//Bootstrap Components
import {Form, Button, Col} from 'react-bootstrap'

//axios instance
import instance from '../../axios';

export default class Subscriptions extends Component {
    constructor(){
        super();

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state= {
            'email': '',
            'error': '',
            'success': ''
        }
    }

    handleEmailChange(e){
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        const data = {
            "emails": this.state.email
        }
        instance.post('/core/subscribers/',data)
            .then(res=>{
                console.log(res);
                if(res.data.emails) {
                    this.setState({
                        success: "Thank You for Subscribing!!",
                        error: ''
                    })
                }
                if(res.data.error){
                    this.setState({
                        error: "Email already subscribed",
                        success: ''
                    })
                }
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <h4>Subscribe to our Newsletter</h4>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Col xs="auto" md={4}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col xs="auto">
                    <Button type="submit" className="mb-2">
                        Submit
                    </Button>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-center mb-3">
                    <Col xs="auto">
                        <span className="text-success">{this.state.success}</span>
                        <span className="text-danger">{this.state.error}</span>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
