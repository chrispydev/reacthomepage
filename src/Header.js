import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
	return (
		<div>
			<Navbar className="navbar" bg="light" expand="md" fixed="top">
				<Navbar.Brand href="#home" className="navbar__brand">
					React-Bootstrap
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto nav">
						<Nav.Link className="nav__link" href="#home">
							Home
						</Nav.Link>
						<Nav.Link className="nav__link" href="#link">
							About
						</Nav.Link>
						<Nav.Link className="nav__link" href="#home">
							Service
						</Nav.Link>
						<Nav.Link className="nav__link" href="#link">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
