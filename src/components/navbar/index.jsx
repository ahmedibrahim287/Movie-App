import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import LocationSwitcher from "../locationSwitcher/locationSwitcher";
import "./navbar.css";

const Navbar = () => {
  const [title, setTitle] = useState();

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  border-bottom py-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-capitalize" to="/movies">
                  movies
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="search form-control me-2 btn  btn-outline-secondary"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setTitle(event.target.value)}
              />
              <Link
                className="btn  btn-outline-secondary"
                to={`/search-results/${title}`}
              >
                Search
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <div className="mt-3">
        <LocationSwitcher></LocationSwitcher>
      </div>
    </Fragment>
  );
};

export default Navbar;
