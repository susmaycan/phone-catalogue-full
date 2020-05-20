import React from 'react'
import './Navbar.scss'
import {
    Nav,
    Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from '../SearchInput'

class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar className="navigation-bar" sticky="top" bg="dark" expand="lg" variant="dark">
                <Link className="brand-link" to="/"><i className="fas fa-mobile-alt"/> Phone-shop</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                       <Search />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default CustomNavbar
