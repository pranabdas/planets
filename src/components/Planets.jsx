import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import { planets } from "../data";

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: planets,
    };
  }
  render() {
    const planets = this.state.planets.map((planet) => {
      return (
        <div className="col-md-4 mt-5">
          <Card key={planet.id}>
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
      </div>
    );
  }
}

export default Planets;
