import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export class DodajKino extends Component {

    state = {
        name: '',
        date: '',
        localization: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/kinos/insert', this.state);
        window.location.href="/Kino/Spis";
    }

    render() {
        const { name, date, localization } = this.state;
        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <h1>Dodaj Kino</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nazwa kina</Form.Label>
                            <Form.Control type="text" placeholder="np. Kino Barońskie" name="name"
                             value={name} onChange={ this.changeHandler }/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Data utworzenia</Form.Label>
                            <Form.Control type="date" name="date"  value={date} onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Lokalizacja kina</Form.Label>
                            <Form.Control type="text" placeholder="np. Warszawa" name="localization"  value={localization} onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" block>Dodaj</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default DodajKino
