import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

class Planets extends Component {
  render() {
    const planets = this.props.planets.map((planet) => {
      return (
        <div key={planet.id} className="col-md-4 mt-5">
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
      </div>
    );
  }
}

export default Planets;
