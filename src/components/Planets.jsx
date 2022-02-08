import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlanet: null,
    };
  }

  handleSelect(planet) {
    this.setState({
      selectedPlanet: planet,
    });
  }

  render() {
    const planets = this.props.planets.map((planet) => {
      return (
        <div
          key={planet.id}
          onClick={() => this.handleSelect(planet)}
          className="col-md-4 mt-5"
        >
          <Card>
            <CardImg alt={planet.name} src={planet.img} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{planet.name}</CardTitle>
              <CardText>{planet.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{planets}</div>

        {this.state.selectedPlanet ? (
          <div>
            <Card className="mt-5 mb-5">
              <CardBody>
                <CardTitle tag="h3">
                  Details of {this.state.selectedPlanet.name}
                </CardTitle>
                <CardText>
                  <span>
                    <b>Number of moons:</b> {this.state.selectedPlanet.moons}<br/>
                  </span>
                  <span>
                    <b>Length of year (earth days):</b>{" "}
                    {this.state.selectedPlanet.lengthOfYear}<br/>
                  </span>
                  <span>
                    <b>Distance from sun (astronomical unit):</b>{" "}
                    {this.state.selectedPlanet.distanceFromSun}
                  </span>
                </CardText>
              </CardBody>
            </Card>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Planets;
