import Header from "./components/Header";

function PageNotFound() {
  return (
    <>
      <Header />

      <div className="container">
        <h3>404: Page not found</h3>
        <p>The page you have requested could not be found.</p>
      </div>
    </>
  );
}

export default PageNotFound;
