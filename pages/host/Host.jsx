import React from "react";
import { Link } from "react-router-dom";

export default function Host(props) {
  return (
    <>
      <div className="dashboard__container">
        <div className="dashboard__tabs">
          <ul>
            <li>
              <Link>Dashboard</Link>
            </li>
            <li>
              <Link>Income</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
