import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ActionsTab from "./../components/Actionstab";
import Icon from '@mui/material/Icon';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { getVans } from "./../api";

export function loader() {
  return getVans();
}

export default function Home() {

  // fetch the vans data, map and display on the UI.
  const vans = useLoaderData();

  const landingPageVans = vans.slice(2, 6).map((van) => (
    <div className="landing__page__vans" key={van.id}>
      <div className="landing__page__van__card">
        <img src={van.imageUrl} alt={van.name} width="100%" />
        <div className="landing__page__van__card__details">
          <span className="van-type">{van.type}</span>
        </div>
        <div className="van-info">
          <p>{van.name}</p>
          <h4>${van.price}<span>/day</span></h4>
        </div>
        <div className="rent__this__van__btn">
          <Link to={`/Vans/${van.id}`}>Rent this van</Link>
        </div>
      </div>
    </div>
  ));


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
      <ActionsTab />
      <div className="homepage__vans__wrapper">
        <h3>Recommended for you</h3>
        <div className="recommended__vans">
          {landingPageVans}
        </div>
      </div>
    </React.Fragment>
  );
}
