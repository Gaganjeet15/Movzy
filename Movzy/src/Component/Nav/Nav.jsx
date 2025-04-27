import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const NavFun = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <span className="navbar-brand navbar-brand-custom">Movzy</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 text-center">
              <li className="nav-item ">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : "inactive-link"} `
                  }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : "inactive-link"} `
                  }>
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tv_show"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : "inactive-link"} `
                  }>
                  TV shows
                </NavLink>
              </li>
            </ul>
            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2 search-input-custom"
                type="search"
                placeholder="Search movies or shows..."
                aria-label="Search"
              />
              <button className="btn search-button-custom" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavFun;
