import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tasty Restaurent</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Sign In</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Map</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Foods
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>BreakFast</DropdownItem>
                <DropdownItem>Lunch</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Dinner</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                id="moviename"
                placeholder="Search"
                aria-label="Search"
              />
              <Button
                className="btn btn-outline-success my-2 my-sm-0"
                id="search"
                type="submit"
              >
                Search
              </Button>
            </form>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
