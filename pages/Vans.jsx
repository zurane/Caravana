import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  // Use the global fetch request function to fetch data from server.js file.
  // Maps over the data and render it on the User Interface.
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVans(data.vans);
      });
  }, []);

  const caraVans = vans.map((van) => (
    <div className="cards" key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <div className="cards-row">
          <div className="van-card">
            <img src={van.imageUrl} alt="caravan image" width="100%" />
            <span className="title-and-price">
              <h4>{van.name}</h4>
              <p>R{van.price}/day</p>
            </span>
            <span className="type-badge">{van.type}</span>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <section className="page-feed-section">
        <h2>Explore our caravan options</h2>
        <div className="tabs">
          <span>Simple</span>
          <span>Luxury</span>
          <span>Rugged</span>
        </div>
        <div className="components">{caraVans}</div>
      </section>
    </>
  );
}
