import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Layout() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            LogOut
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="list">
                 All Products
              </Nav.Link>
              <Nav.Link as={Link} to="addtocart">
                Cart🛒
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{/* Outlet for rendering nested routes */}
      <Outlet />
    </div>
  );
}

export default Layout;
