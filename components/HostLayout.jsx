import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function HostLayout() {

  
  return (
    <>
      <div className="dashboard__tabs">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
