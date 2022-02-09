import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function RenderPlanetDetails({ planet }) {
  return (
    <div className="mt-2">
      <Card>
        <CardBody>
          <CardTitle tag="h3">{planet.name}</CardTitle>
          <CardText>
            <b>Length of year: </b>
            {planet.lengthOfYear} (earth days)
          </CardText>
          <CardText>
            <b>Number of moons: </b>
            {planet.moons}
          </CardText>
          <CardText>
            <b>Distance from the Sun: </b>
            {planet.distanceFromSun} (astronomical unit*)
          </CardText>
          <CardText>
            <b>Description: </b>
            {planet.description}
          </CardText>
          <CardText>
            * astronomical unit is distance between earth and sun.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default RenderPlanetDetails;
