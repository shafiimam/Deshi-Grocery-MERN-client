import React, { useContext } from "react";
import "../../bootstrap.min.css";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar bg="transparent" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Deshi Bazar</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/home" className="mx-3">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders" className="mx-3">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin" className="mx-3">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            {!loggedInUser.isSignedIn ? (
              <LinkContainer to="/login" className="mx-3">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            ) : (
              <Image
                src={loggedInUser.photo}
                alt={loggedInUser.name}
                roundedCircle
                height="30px"
              ></Image>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
