import React from "react";
import { Link } from "react-router-dom";

export default function Host() {
  return (
    <>
      <div className="dashboard__container">
        <div className="dashboard__tabs">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Income</Link>
            </li>
            <li>
              <Link to="/">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
