import React from 'react'
import './Navbar.scss'
import {
    FormControl,
    Nav,
    Navbar,
    Button,
    Form
} from "react-bootstrap"
import { Link } from 'react-router-dom'

class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar className="navigation-bar" sticky="top" bg="dark" expand="lg" variant="dark">
                <Link className="brand-link" to="/"><i className="fas fa-mobile-alt"></i> Phone-shop</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light"><i className="fas fa-search"></i> Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default CustomNavbar