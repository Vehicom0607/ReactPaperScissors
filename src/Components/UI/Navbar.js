import React from "react";
import {Nav, Navbar, NavbarBrand} from "react-bootstrap";

const TopNavbar = (props) => {
    return (
    <Navbar bg='dark' variant='dark' >
        <NavbarBrand>ReactPaperScissors</NavbarBrand>
        <Nav className='mr-auto'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Github</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default TopNavbar