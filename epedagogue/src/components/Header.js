import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Courses from "./Courses";
import Contact from "./Contact";
import Home from "./Home";
import Career from "./Career";
import Myteam from "./Myteam";
import Zoom from "react-reveal/Zoom";
import "./header.css";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <Zoom>
      <div>
        <Navbar
          className="nav"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand as={Link} to="/" className="hf">
            <img
              className="logo"
              src={logo}
              width="50px"
              height="50px"
              alt="logo"
            />
            ePedagogue
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link className="navbar-link" as={Link} to="/service">
                  Servies
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-link" as={Link} to="/career">
                  Career
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-link" as={Link} to="/my-team">
                  MyTeam
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-link" as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-link" as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses" component={Courses} />
          <Route path="/service" component={Service} />
          <Route path="/career" component={Career} />
          <Route path="/my-team" component={Myteam} />
        </Switch>
      </div>
    </Zoom>
  );
}
