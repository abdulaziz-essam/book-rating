import React from 'react';
// import { Container, Nav, NavDropdown} from 'react-bootstrap'
import './navbar.css'
const Navbar = () => {
    return (
        <div>

            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="/cart">cart</a>
            </div>
        </div>
    );
}

export default Navbar;
