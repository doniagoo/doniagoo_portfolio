import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div className="">
      <Navbar className="navbar-main p-4 mb-4" container dark expand="md">
        {/* <NavbarBrand>
          <NavLink>
            <Link to="/">Ricky and Morty</Link>
          </NavLink>
        </NavbarBrand> */}
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="m-auto gap-5" navbar>
            <NavItem>
              <NavLink className="navbar-link">
                <Link to="/" activeClassName="nav-active">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-link">
                <Link to="/about" activeClassName="nav-active">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-link">
                <Link to="/timeline" activeClassName="nav-active">TimeLine</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-link" activeClassName="nav-active">
                <Link to="/projects" activeClassName="nav-active">Projects</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
