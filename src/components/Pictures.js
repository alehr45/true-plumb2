import React from "react";
import sink1 from "../images/sink1.jpeg"
import sink2 from "../images/sink2.jpeg"
import sink3 from "../images/sink3.jpeg"
import Page from "./Page";
import { Image, Col, Row, Container } from 'react-bootstrap'


function Pictures() {
    return (
        <Page>
            <Container>
                <Row>
                    <Col>
                        <Image src={sink1} height={300} />
                    </Col>
                    <Col>
                        <Image src={sink2} height={300} />
                    </Col>
                    <Col>
                        <Image src={sink3} height={300} />
                    </Col>
                </Row>
            </Container>
        </Page>
    )
}

export default Pictures