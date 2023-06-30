import React from 'react';
import "./Navbars.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Navbars() {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <FontAwesomeIcon icon={faCartShopping} size="lg" style={{marginRight:15}} className="icons-header-navbar" />
          <FontAwesomeIcon icon={faHeart} size="lg" className="icons-header-navbar" />
          <FontAwesomeIcon icon={faUser} size="lg" className="icons-header-navbar" />
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Poetry</a></li>
                    <li><a className="dropdown-item" href="#">Science Fiction</a></li>
                    <li><a className="dropdown-item" href="#">Nonfiction</a></li>
                    <li><a className="dropdown-item" href="#">Fantasy</a></li>
                    <li><a className="dropdown-item" href="#">Mystery</a></li>
                    <li><a className="dropdown-item" href="#">Biography</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Brands</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Best Sellers</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About Us</a></li>
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                    <li><a className="dropdown-item" href="#">FAQ's</a></li>
                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbars;
