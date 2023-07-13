import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

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
