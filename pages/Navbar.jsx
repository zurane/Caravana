import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navigation-bar">
        <div className="logo">
          <Link to="/">#CARAVANA</Link>
        </div>
        <div className="links">
          <Link to="/About">About</Link>
          <Link to="/Vans">Caravans</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
