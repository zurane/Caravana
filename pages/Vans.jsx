import React from "react";
import { ReactDOM } from "react";

export default function () {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  const caraVans = vans.map(van => {

    <section className="cards">
    <div className="cards-row">
      <div className="van-card" key={van.id}>
        <img src={van.imageUrl} alt="caravan image" width="100"/>
        <h3>{van.title}</h3>
        <span>{van.price}</span>
      </div>
    </div>
  </section>


  });

  return (
    <>
      <h1>Explore our caravan options</h1>
      <div className="tabs">
        <span>Simple</span>
        <span>Luxury</span>
        <span>Rugged</span>
      </div>
    </>
  );
}
