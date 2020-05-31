import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Start extends React.Component {
    render() {
        return (
            <div className="Start">
                <Container fluid>
                    <Row>
                        <h2>Terminarz kinowy</h2>
                    </Row>
                    <Row>
                        <p>
                            Terminarz kinowy to narzędzie mające na celu usprawnienie dodawania seansów oraz kin.<br/>
                            By zacząć pracę wybierz jedną z opcji w pasku nawigacyjnym.<br/>
                            Jeżeli nie wiesz jak dokładnie zacząć to przejdź do sekcji "Pomoc".
                        </p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Start;