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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // localStorage.logged_msg;
  console.info(localStorage.logged_msg);
  
  function logout() {
    this.props.history.push("/");
    alert('clicked..');
  }



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
              
              <DropdownToggle nav caret>
                Login
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  href="/HrTeam">
                  HR Team
                </DropdownItem >
                <DropdownItem tag="a"  href="/Applicant">
                  Applicant
                </DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>
                  Sign-Out
                </DropdownItem> */}
              </DropdownMenu>
              
            </UncontrolledDropdown>
            
            </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>

    
  );
  
}

export default Header;