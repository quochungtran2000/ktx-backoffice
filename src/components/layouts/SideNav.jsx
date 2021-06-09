import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link to="/" className="nav-link">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Data</div>
            <Link to="/pages" className="nav-link">
              Pages
            </Link>
            <Link to="/user" className="nav-link">
              User
            </Link>
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
            <Link to="/location" className="nav-link">
              Location
            </Link>
            <Link to="/category" className="nav-link">
              Category
            </Link>

          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
