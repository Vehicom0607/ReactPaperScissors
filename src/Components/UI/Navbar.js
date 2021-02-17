import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const TopNavbar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className='m-auto' >ReactPaperScissors</Navbar.Brand>
            <Nav className="mr-auto position-absolute">
                <Nav.Link href="/" >Play</Nav.Link>
                <Nav.Link href='https://github.com/Vehicom0607/ReactPaperScissors'>Github</Nav.Link>
                <Nav.Link disabled>Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TopNavbar