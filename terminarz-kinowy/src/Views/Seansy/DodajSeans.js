import React, { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export class DodajSeans extends Component {

    state = {
        kinoId: '',
        name: '',
        length: 0
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/seans/insert/' + this.state.kinoId, this.state);
        console.log('http://localhost:8080/api/seans/insert/' + this.state.kinoId);
        // window.location.href="/Seans/Spis";
    }

    render() {
        const { kinoId, name, length } = this.state;
        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <h1>Dodaj Seans</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID Kina</Form.Label>
                            <Form.Control type="text" placeholder="np. 9cd777ae-eea4-4e76-8ef6-d24aeb09a0a8" 
                                name="kinoId" value={ kinoId } onChange={ this.changeHandler }/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Czas trwania w sekundach</Form.Label>
                            <Form.Control type="text" placeholder="np. 7200" name="length"
                                value={ length } onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nazwa seansu</Form.Label>
                            <Form.Control type="text" placeholder="np. Władca Pierścieni: Powrót Króla" 
                                name="name" value={ name } onChange={ this.changeHandler }/>
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

export default DodajSeans
