import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Content(props) {
    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {/* whenever you pass between these tags, it'll render automatically */}
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;