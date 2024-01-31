"use client"
import Link from "next/link";
import { useState } from "react";
import Nav from "./navbar.js";
import Slider from "./slider.js"


const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchValue);
  };

  return (
<<<<<<< HEAD
    <>
=======
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg pt-3 pb-3 ps-4 pe-4 text-light">
=======
>>>>>>> origin/master
    <nav className="navbar navbar-expand-lg pt-3 pb-3 ps-4 pe-4 text-dark">
>>>>>>> d2aa09cab00553512b3fa1358d56aff4045215e6
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
<<<<<<< HEAD
       
=======

        <div className="d-flex align-items-center">
          <form onSubmit={handleSearchSubmit} className="me-3">
            <div className="input-group">
              <span className="input-group-text">
                <img src="/Search.png" alt="Search" width="20" height="20" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </form>
          <div className="d-flex align-items-center">
            <Link href="/My Cart" passHref legacyBehavior>
              <a className="btn btn-link text-light d-flex align-items-center">
                <img src="/Cart.png" alt="Cart" width="40" height="40" />
                <div className="nav-link text-primary ms-2">My Cart</div>
              </a>
            </Link>
          </div>
        </div>
>>>>>>> d2aa09cab00553512b3fa1358d56aff4045215e6
      </div>
    </nav>
<<<<<<< HEAD
    </>
=======
    
>>>>>>> origin/master
  );
};

export default Header;
