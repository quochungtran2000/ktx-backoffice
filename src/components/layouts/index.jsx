import React from "react";
import Nav from "./Nav";
import SideNav from "./SideNav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="sb-nav-fixed">
      <Nav />
      <div id="layoutSidenav">
        <SideNav />
        <div id="layoutSidenav_content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
