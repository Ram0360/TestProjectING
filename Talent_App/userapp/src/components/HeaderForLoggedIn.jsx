import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import '../css/Header.css'

const HeaderForLoggedIn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="header-bar">
      <Navbar light expand="md">
        {/* <NavbarBrand href="/">Talent Hire</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <NavLink href="/">Logout</NavLink>
             {/* <DropdownToggle nav>
                Logout
              </DropdownToggle> */}
              {/* <DropdownMenu right>
                <DropdownItem  href="/HrTeam">
                  Logout
                </DropdownItem >
              </DropdownMenu> */}
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderForLoggedIn;