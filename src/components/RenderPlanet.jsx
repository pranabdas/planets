import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

function RenderPlanet({ planet, onClick }) {
  return (
    <div className="col-sm-3 mt-5" onClick={onClick} style={{ cursor: "pointer" }}>
      <Card>
        <CardImg alt={planet.name} src={planet.img} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{planet.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default RenderPlanet;
