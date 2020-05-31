import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Start extends React.Component {

    logOut() {
        console.log('Log out called');
        console.log(document.cookie);
        document.cookie = "loggedIn=false;";
        console.log(document.cookie);
        window.location.href="/";
    }

    render() {
        return (
            <div className="Start">
                <Container fluid>
                    <Row>
                        <Col>
                        <h2>Terminarz kinowy</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Terminarz kinowy to narzędzie mające na celu usprawnienie dodawania seansów oraz kin.<br/>
                                By zacząć pracę wybierz jedną z opcji w pasku nawigacyjnym.<br/>
                                Jeżeli nie wiesz jak dokładnie zacząć to przejdź do sekcji "Pomoc".
                            </p>
                            <Button onClick={ this.logOut }>Wyloguj się</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Start;