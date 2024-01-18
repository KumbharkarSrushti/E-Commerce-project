"use client"
import Link from "next/link";
import { useState } from "react";
import Nav from "./navbar.js";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg pt-3 pb-3 ps-4 pe-4 text-dark">
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

        <div className="d-flex align-items-center">
          <div className="me-3 position-relative">
            <button
              className="btn btn-link text-light"
              onClick={toggleSearch}
            >
              <img src="/Search.png" alt="Search" width="20" height="20" />
            </button>

            <div
              className={`modal fade${isSearchOpen ? " show" : ""}`}
              style={{ display: isSearchOpen ? "block" : "none" }}
              tabIndex="-1"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Search</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggleSearch}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/cart" passHref legacyBehavior>
              <a className="btn btn-link text-light">
                <img src="/Cart.png" alt="Cart" width="40" height="40" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
