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
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div className="">
        <Navbar color="dark" container dark expand="md" light>
          <NavbarBrand>
            <NavLink>
              <Link to="/">Ricky and Morty</Link>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="ms-auto gap-3" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Inicio</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/buscador">Personajes</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/otros">Saber Más...</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
};

export default NavBar;
