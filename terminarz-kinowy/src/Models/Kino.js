import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class Kino extends Component {

    deleteEntry(id) {
        axios.delete('http://localhost:8080/api/kinos/delete/' + id)
        .then(response => {
            window.location.reload();
        }).catch(error => {
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.kino.id}</td>
                <td>{this.props.kino.name}</td>
                <td>{this.props.kino.localization}</td>
                <td>{this.props.kino.date}</td>
                <td><Button variant="outline-warning" onClick={ () => { window.location.href="/Kino/Edytuj/" + this.props.kino.id; }}>Edytuj</Button></td>
                <td><Button variant="outline-danger" onClick={ () => { this.deleteEntry(this.props.kino.id) } }>
                    Usuń
                </Button></td>
            </tr>
        );
    }
}

// PropTypes
Kino.propTypes = {
    kino: PropTypes.object.isRequired
}

export default Kino
