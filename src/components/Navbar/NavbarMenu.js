import React, { Component } from 'react'
import Logo from "../../Logo/logo.JPG"
import './NavbarMenu.css'
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NavbarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navExpanded: false
        };
    }
    
      setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
      }
    
      setNavClose = () => {
        this.setState({ navExpanded: false });
      }

    render() {
        return (
            <>
                <Navbar fixed="top" expand="lg" bg="white" variant="light" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} alt="logo" style={{ width: '50px' }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" onClick={this.setNavClose}>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/explore" >Explore</Nav.Link>
                            <Nav.Link as={Link} to="/search">Search</Nav.Link>
                            <Nav.Link as={Link} to="/library">Library</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/login"> Sign in</Nav.Link>
                            <Nav.Link as={Link} to="/signup"> Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}


export default NavbarMenu