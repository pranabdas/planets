import { Component, createRef } from "react";
import { Alert } from "reactstrap";
import Header from "./components/Header";
import RenderPlanet from "./components/RenderPlanet";
import RenderPlanetDetails from "./components/RenderPlanetDetails";
import { planets } from "./data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: planets,
      planetId: null,
    };

    this.refToDetailsCard = createRef();
  }

  handleSelect(planetId) {
    this.setState({
      planetId: planetId,
    });

    setTimeout(() => {
      this.refToDetailsCard.current.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }

  render() {
    return (
      <div>
        <Header />

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

          <div ref={this.refToDetailsCard}>
            {this.state.planetId !== null && (
              <RenderPlanetDetails
                planet={
                  this.state.planets.filter(
                    (planet) => planet.id === this.state.planetId
                  )[0]
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
