import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Icon from '@mui/material/Icon';


export default function Home() {
  return (
    <React.Fragment>
      <header>
        <div className="hero">
          <div className="hero-content-wrapper">
            <span>You got the plans,<br />we got the travel vans</span>
            <p>
              Add adventure to your life by joining the #vanlife <br /> movement. Rent
              the perfect van to make your <br />perfect road trip.
            </p>
            <Link className="btn">Find your van</Link>
            <Link className="btn-2">Special requests</Link>
          </div>
        </div>
      </header>
      <div className="quick-actions-bar">
        <div className="action-tab">
          <div className="tab">
            <Icon>radar</Icon>
            <h4>Manage my booking</h4>
          </div>
          <div className="tab">
            <Icon>radar</Icon>
            <h4>Retrieve my invoice</h4>
          </div>
          <div className="tab">
            <Icon>radar</Icon>
            <h4>Find an answer</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
