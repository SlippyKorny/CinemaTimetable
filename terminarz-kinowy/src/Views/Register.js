import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export class Register extends Component {
    render() {
        return (
            <Form>
              <Row>
                <Col>
                  <h1>Zarejestruj się!</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Adres e-mail:</Form.Label>
                    <Form.Control type="email" placeholder="mail@provider.com" name="login"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col>
                    <Form.Group>
                        <Form.Label>Hasło:</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password"/>
                    </Form.Group>
                  </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Potwierdź hasło:</Form.Label>
                        <Form.Control type="password" placeholder="password confirmation" 
                            name="passwordConfirm"/>
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
