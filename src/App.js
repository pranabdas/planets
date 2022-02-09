import React from "react";
import { Alert, Navbar, NavbarBrand } from "reactstrap";
import RenderPlanet from "./components/RenderPlanet";
import RenderPlanetDetails from "./components/RenderPlanetDetails";
import { planets } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: planets,
      planetId: null,
    };
  }

  handleSelect(planetId) {
    this.setState({
      planetId: planetId,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <div className="container">
            <NavbarBrand href="/" className="mr-auto">
              <img src="/favicon.ico" alt="logo" width="24px" height="24px" />
              &nbsp; Planets
            </NavbarBrand>
          </div>
        </Navbar>

        <div className="container">
          <div className="mt-3 text-center">
            <h3>Explore the planets in our solar system</h3>
          </div>

          <div className="row">
            {this.state.planets.map((planet) => (
              <RenderPlanet
                planet={planet}
                key={planet.id}
                onClick={() => this.handleSelect(planet.id)}
              />
            ))}
          </div>

          <div className="mt-3 mb-3 text-center">
            <Alert>
              <p>
                Click over each planet to learn more. Details will be shown
                below.
              </p>
            </Alert>
          </div>

          {this.state.planetId !== null ? (
            <RenderPlanetDetails
              planet={
                this.state.planets.filter(
                  (planet) => planet.id === this.state.planetId
                )[0]
              }
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
