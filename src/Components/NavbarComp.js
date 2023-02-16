import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./styles/style.css";

import Home from './Home';
import Hobbies from './Hobbies';
import Education from './Education';
import Contact from './Contact';
import About from './About';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar variant="dark" expand="lg" className="pt-0 pb-0">
                        <Navbar.Brand as={Link} to="/Home" className="name ps-lg-4 ps-1 fs-5 fw-bold text-dark">Asali Tharaka</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
                            <Nav
                                className="mr-auto my-2 my-lg-0 fs-6 fw-bolder"
                            >
                                <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
                                <Nav.Link as={Link} to="/education">Education</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                         <Route path="/hobbies">
                            <Hobbies />
                        </Route>
                         <Route path="/education">
                            <Education />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
