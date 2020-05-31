import React from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Kino from '../../Models/Kino.js';

class SpisKin extends React.Component {
    state = {
        kinos: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/kinos/all')
            .then(response => {
                this.setState({kinos: response.data})
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        let kinoModels = this.state.kinos.map((kino) => (<Kino key={kino.Id} kino={kino}/>));

        return (
            <div className="SpisKin">
                <div class="mt-3"></div>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nazwa</th>
                                    <th>Lokalizacja</th>
                                    <th>Data założenia</th>
                                    <th>Edytuj</th>
                                    <th>Usuń</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kinoModels}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="/Kino/Dodaj"><Button variant="success" block>Dodaj Kino</Button></a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SpisKin;