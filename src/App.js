import { Navbar, NavbarBrand } from "reactstrap";
import Planets from "./components/Planets";

function App() {
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">Planets</NavbarBrand>
        </div>
      </Navbar>
      <Planets />
    </>
  );
}

export default App;
