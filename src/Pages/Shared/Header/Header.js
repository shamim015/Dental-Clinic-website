import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home" className="website-name">Dental Clinic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About us</Nav.Link>

                        {user.email && <span style={{ color: 'white' }}>Hello {user.displayName}</span>}
                        {
                            user.email ?

                                <Button onClick={logOut} variant="success">Logout</Button>
                                :
                                <NavLink to="/login">Login</NavLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;