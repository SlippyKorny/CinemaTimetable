import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export class Register extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('Hello world0!');
        if (!(this.state.password === this.state.confirmPassword)) {
            this.state.error = 'Hasła się nie zgadzają!';
        }

        console.log('Hello world1!');
        var obj = {
            email: this.state.email,
            password: this.state.password,
            id: ''
        };

        console.log(obj);
        axios.post('http://localhost:8080/api/user/register', obj)
            .then(response => {
                if (response.data) {
                    window.location.href="/";
                } else {
                    this.state.error = "Niespodziewany błąd podczas rejestracji. Mail już zajęty?";
                }
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        const { email, password, confirmPassword } = this.state;
        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
        <h1>{this.state.error}</h1>
                    </Col>
                </Row>
              <Row>
                <Col>
                  <h1>Zarejestruj się!</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Adres e-mail:</Form.Label>
                    <Form.Control type="email" placeholder="mail@provider.com" name="email"
                        value={ email } onChange={ this.changeHandler }/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col>
                    <Form.Group>
                        <Form.Label>Hasło:</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password"
                            value={ password } onChange={ this.changeHandler }/>
                    </Form.Group>
                  </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Potwierdź hasło:</Form.Label>
                        <Form.Control type="password" placeholder="password confirmation" 
                            name="confirmPassword" value={ confirmPassword } onChange={ this.changeHandler }/>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col><a href="/register">Register here</a></Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" type="submit" block>Rejestracja</Button>
                </Col>
              </Row>
            </Form>
        )
    }
}

export default Register
