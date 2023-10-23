import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';

export default function Navbar() {
  // Object with styling properties to apply on the active Navigation Links.
  const activeStyle = {
    fontWeight: "normal",
    textDecoration: "underline",
  }
  return (
    <>
      <nav className="navigation-bar">
        <div className="logo">
          <Link to="/">#CARAVANA</Link>
        </div>
        <div className="links">
          {/* The isActive is a boolean that checks for the active link and toggles between True and False values , if isActive = true (becomes true when clicked) then apply the activeStyle ( applies the styling properties) to the Navlink element or otherwise don't*/}
          <Stack direction="row" spacing={1}>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/Vans">Vans</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/About">About</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/host">Support</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/Host">Host</NavLink>
            <NavLink className={"login-btn"} to="/login"><Icon>account_circle</Icon >Login</NavLink>
          </Stack>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
