import Link from "next/link";
import Nav from "./navbar.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-3 pb-3 ps-4 pe-4 text-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#fff" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Nav />
       
      </div>
    </nav>
    
  );
};

export default Header;
