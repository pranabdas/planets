import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">Planets</NavbarBrand>
        </div>
      </Navbar>
    </>
  );
}

export default App;
