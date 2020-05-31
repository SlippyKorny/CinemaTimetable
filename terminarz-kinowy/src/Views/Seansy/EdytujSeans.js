import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

export class EdytujSeans extends Component {

    state = {
        id: '',
        kinoId: '',
        name: '',
        length: 0
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/seans/update', this.state);
        window.location.href="/Seans/Spis";
    }

    
    componentDidMount() {
        let hrefTokenizer = window.location.href.split('/');
        let id = hrefTokenizer[hrefTokenizer.length-1];
        this.state.id = id;

        axios.get('http://localhost:8080/api/seans/byId/' + id)
        .then(response => {
            this.state.id = response.data.id;
            this.state.kinoId = response.data.kinoId;
            this.state.name = response.data.name;
            this.state.length = response.data.length;
            console.log(response.data);
            this.forceUpdate();
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const { id, kinoId, name, length } = this.state;
        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col>
                        <h1>Edytuj Seans</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" disabled name="length" value={ id } onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID Kina</Form.Label>
                            <Form.Control type="text" disabled name="length" value={ kinoId } onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Czas trwania w sekundach</Form.Label>
                            <Form.Control type="text" name="length" value={ length } onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nazwa seansu</Form.Label>
                            <Form.Control type="text" name="name" value={ name } onChange={ this.changeHandler }/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" block>Zaktualizuj</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default EdytujSeans
