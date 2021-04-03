import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'; // standard way is to do multiple lines
function Footer() {
    return (
        // mt-5 is margin top 5
        <footer className="mt-5"> 
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12} >
                        Royce Le
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Royce Le.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;