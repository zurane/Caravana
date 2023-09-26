import React from "react";
import { NavLink } from "react-router-dom";

export default function Tabs() {
    return (
        <div className="dashboard__tabs">
            <ul>
                <li>
                    <NavLink to="." end={true}>Description</NavLink>
                </li>
                <li>
                    <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="photos">Photos</NavLink>
                </li>
            </ul>
        </div>
    );
}
