import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Topbar.css";
import { Link } from "react-router-dom";

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
              <Nav.Link href="/" to="/">
                خانه
              </Nav.Link>

              <NavDropdown title="دوره های آموزشی" id="basic-nav-dropdown">
                <NavDropdown.Item href="/courses">
                  تمامی دوره ها
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  مهندسی نرم افزار
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">حسابداری</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  طراحی گرافیک
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  بورس بازار و سهام
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  کسب و کار
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  برنامه نویسی وب
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="صفحات" id="basic-nav-dropdown">
                <NavDropdown.Item href="/404">صفحه 404</NavDropdown.Item>
                <NavDropdown.Item href="/about">درباره ما</NavDropdown.Item>
                <NavDropdown.Item href="/rules">شرایط و قوانین</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">بلاگ</Nav.Link>
              <Nav.Link href="/contact" to="/contact">
                تماس با ما
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="topbar-login-section">
            <button className="login-btn">
              <Link to="/login" className="topbar-login-link">
                ورود
              </Link>
            </button>
            <button className="register-btn">
              <Link to="/register" className="topbar-register-link">
                عضویت
              </Link>
            </button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
