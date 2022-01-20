import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Image from "../images/logo1.png"
import { Button } from "react-bootstrap"


function Header() {
    return (
        <>
            <Navbar className="border-bottom" bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="header-image" src={Image} alt="Snow" height={65} width={220} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#link">About Us</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">
                        <Button variant="success">Call Us Now!</Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;