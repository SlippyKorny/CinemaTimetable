import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class Seans extends Component {

    deleteEntry(id) {
        axios.delete('http://localhost:8080/api/seans/delete/' + id)
        .then(response => {
            window.location.reload();
        }).catch(error => {
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.seans.id}</td>
                <td>{this.props.seans.kinoId}</td>
                <td>{this.props.seans.name}</td>
                <td>{this.props.seans.length}</td>
                <td><Button variant="outline-warning" onClick={ () => { window.location.href="/Seans/Edytuj/" + this.props.seans.id;} }>Edytuj</Button></td>
                <td><Button variant="outline-danger" onClick={ () => { this.deleteEntry(this.props.seans.id) } }>Usuń</Button></td>
            </tr>
        )
    }
}

// PropTypes
Seans.propTypes = {
    seans: PropTypes.object.isRequired
}

export default Seans
