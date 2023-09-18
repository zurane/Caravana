import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout() {

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  }

  function Navigation() {
    return (
      <div className="dashboard__tabs">
        <ul>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/host" end={true}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="income">Income</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="vans">Vans</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}




















































