import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Header />

      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/" className="text-decoration-none">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>About</BreadcrumbItem>
        </Breadcrumb>

        <h3>About</h3>
        <p>
          This is a react application for learning purpose demonstrating various
          react capabilities.
        </p>
      </div>
    </>
  );
}

export default About;
