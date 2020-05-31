import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

export class EdytujKino extends Component {

    state = {
        id: '',
        name: '',
        localization: '',
        date: '',
        seanses: []
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/kinos/update', this.state);
        window.location.href="/Kino/Spis";
    }

    componentDidMount() {
        let hrefTokenizer = window.location.href.split('/');
        let id = hrefTokenizer[hrefTokenizer.length-1];
        this.state.id = id;

        axios.get('http://localhost:8080/api/kinos/byId/' + id)
        .then(response => {
            this.state.id = response.data.id;
            this.state.name = response.data.name;
            this.state.localization = response.data.localization;
            this.state.date = response.data.date;
            this.state.seanses = response.data.seanses;
            this.forceUpdate();
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const { id, name, date, localization } = this.state;
        console.log(this.state);

        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <h1>Edytuj Kino</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Id Kina</Form.Label>
                            <Form.Control type="text" disabled name="id" value={id} onChange={ this.changeHandler }/>
                        </Form.Group>
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

export default EdytujKino
