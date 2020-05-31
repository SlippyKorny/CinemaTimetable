import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div style={{position: 'fixed', bottom: 0, textAlign: 'center'}}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Zrobione przez Kornela Domeradzkiego</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;