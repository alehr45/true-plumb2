import React from "react";
import hero1 from "../images/hero2.jpeg"
import { Col, Container, Row, Button } from "react-bootstrap"

function Hero() {

    return (

        <div className="hero-container pb-5">
            <img className="img-fluid w-100" src={hero1} alt="Snow" />
            <div className="image-header">
                <h1 className="hero-header text-white border-dark">True Plumb 2.0</h1>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="success">Hello</Button>
                        </Col>
                        <Col>
                            <Button variant="success"  >Goodbye</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Hero