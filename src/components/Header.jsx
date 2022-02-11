import React from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" navbar="true">
            <img src="/favicon.ico" alt="logo" width="24px" height="24px" />
            &nbsp; Planets
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/feedback" className="nav-link">
                  Feedback
                </NavLink>
              </NavItem>

              <NavItem>
                <a
                  href="https://github.com/pranabdas/planets"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
