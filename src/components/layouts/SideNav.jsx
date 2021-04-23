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
            <Link to='/' >
              <a className="nav-link">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </a>
            </Link>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <Link to="/pages">
              <a className="nav-link">
                Pages
              </a>
            </Link>
            <Link to="/posts">
              <a className="nav-link">
                Posts
              </a>
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
