import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="Topbar">
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="#home">
                <img
                  src="/assests/images/logo.png"
                  alt=""
                  className="logo-img"
                />
              </Navbar.Brand>
              <Nav.Link href="/" to='/'>خانه</Nav.Link>
              <NavDropdown title="دوره های آموزشی" id="basic-nav-dropdown">
                <NavDropdown.Item href="/courses">تمامی دوره ها</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">بلاگ</Nav.Link>
              <Nav.Link href="#home">فروشگاه</Nav.Link>
              <Nav.Link href="/contact">تماس با ما</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="topbar-login-section">
            <button className="login-btn">
              <a href="#" className="topbar-login-link">
                ورود
              </a>
            </button>
            <button className="register-btn">
              <a href="#" className="topbar-register-link">
                عضویت
              </a>
            </button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
