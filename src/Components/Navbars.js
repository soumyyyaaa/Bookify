import React from "react";
import "./Navbars.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";

function Navbars() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            style={{ marginRight: 15 }}
            className="icons-header-navbar"
          />
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="icons-header-navbar"
          />
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            className="icons-header-navbar"
          />
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a className="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/categories" style={{ textDecoration: "none" }}>
                    <a className="nav-link">Categories</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/brands" style={{ textDecoration: "none" }}>
                    <a className="nav-link">Brands</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bestsellers" style={{ textDecoration: "none" }}>
                    <a className="nav-link">Best Sellers</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <Link
                      to="/aboutus"
                      style={{ textDecoration: "none" }}
                      className="dropdown-item"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/blogs"
                      style={{ textDecoration: "none" }}
                      className="dropdown-item"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/faq"
                      style={{ textDecoration: "none" }}
                      className="dropdown-item"
                    >
                      FAQ's
                    </Link>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbars;
