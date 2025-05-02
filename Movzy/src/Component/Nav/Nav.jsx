import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const NavFun = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <span className="navbar-brand navbar-brand-custom">Movzy</span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen ? "true" : "false"}
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Regular navbar for larger screens */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 text-center">
              <li className="nav-item">
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

      {/* Side navigation for mobile */}
      <div className={`sidebar-nav ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-brand">Movzy</span>
          <button className="close-sidebar" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : "inactive-link"}`
              }
              onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : "inactive-link"}`
              }
              onClick={toggleSidebar}>
              Movies
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/tv_show"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : "inactive-link"}`
              }
              onClick={toggleSidebar}>
              TV shows
            </NavLink>
          </li>
        </ul>
        <form className="sidebar-search" role="search">
          <input
            className="form-control mb-2 search-input-custom"
            type="search"
            placeholder="Search movies or shows..."
            aria-label="Search"
          />
          <button className="btn search-button-custom w-100" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default NavFun;
