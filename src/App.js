import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Planets from "./components/Planets";
import { planets } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: planets,
    };
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <div className="container">
            <NavbarBrand href="/">Planets</NavbarBrand>
          </div>
        </Navbar>
        <Planets planets={this.state.planets} />
      </div>
    );
  }
}

export default App;
