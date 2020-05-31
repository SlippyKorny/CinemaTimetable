import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export class Login extends Component {

    state = {
        email: '',
        password: '',
        id: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/user/login', this.state)
            .then(response => {
                console.log("response received");
                console.log(response.data);
                if (response.data) {
                    this.setLoginCookie();
                    window.location.href="/"
                }
            }).catch(error => {
                console.log(error);
            });
    }

    setLoginCookie() {
        console.log("Calling setLoginCookie");
        var cookies = document.cookie.split(';');
        var newCookies = '';
        cookies.forEach(cookie => {
            if (cookie.includes('loggedIn')) {
                var loginCookieData = cookie.split('=');
                newCookies += loginCookieData[0] + "=true;";
            } else {
                newCookies += cookie + ";";
            }
        });
        document.cookie = newCookies;
    }

    render() {
        const { email, password } = this.state;

        return (
            <Form onSubmit={this.submitHandler}>
              <Row>
                <Col>
                  <h1>Zaloguj się!</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Adres e-mail:</Form.Label>
                    <Form.Control type="email" placeholder="mail@provider.com" name="email"
                        value={ email } onChange={ this.changeHandler }/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Hasło:</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password"
                        value={ password } onChange={ this.changeHandler }/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col><a href="/register">Chce się zarejestrować!</a></Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" type="submit" block>Login</Button>
                </Col>
              </Row>
            </Form>
        )
    }
}

export default Login;