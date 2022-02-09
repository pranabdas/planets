import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar color="dark" dark expand="md">
      <div className="container">
        <Nav navbar>
          <NavbarBrand href="/" navbar>
            <img src="/favicon.ico" alt="logo" width="24px" height="24px" />
            &nbsp; Planets
          </NavbarBrand>

          <NavItem>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;
