import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Seans from '../../Models/Seans.js';

export class SpisSeansow extends Component {
    state = {
        seanses: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/seans/all')
        .then(response => {
            console.log(response)
            this.setState({seanses: response.data})
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        let seansModels = this.state.seanses.map((seans) => (
            <Seans key={seans.Id} seans={seans}/>
        ));

        return (
            <div className="SpisSeansow">
                <div class="mt-3"></div>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id Kina</th>
                                    <th>Nazwa seansu</th>
                                    <th>Długość (w minutach)</th>
                                    <th>Edytuj</th>
                                    <th>Usuń</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seansModels}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="/Seans/Dodaj"><Button variant="success" block>Dodaj Seans</Button></a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SpisSeansow
